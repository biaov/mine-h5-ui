import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import type { ComponentIndexItem, ComponentMeta, ComponentPart, GuideIndexItem, GuideMeta, IconMeta, LibraryManifest } from '../types'
import { resolveComponent } from './resolve'
import { searchComponents, searchIcons, type SearchHit } from './search'

export interface ComponentScope {
  item: ComponentIndexItem
  meta: ComponentMeta
  part: ComponentPart
  isSubComponent: boolean
}

function candidateDataDirs(): URL[] {
  return [new URL('../generated/', import.meta.url), new URL('./generated/', import.meta.url), new URL('../src/generated/', import.meta.url)]
}

function defaultDataDir(): URL {
  for (const candidate of candidateDataDirs()) {
    if (existsSync(fileURLToPath(candidate))) return candidate
  }
  return candidateDataDirs()[0]!
}

async function readJson<T>(dir: URL, name: string): Promise<T> {
  return JSON.parse(await readFile(new URL(name, dir), 'utf-8')) as T
}

export class DataRepository {
  private manifest!: LibraryManifest
  private index: ComponentIndexItem[] = []
  private icons: IconMeta[] = []
  private guidesIndex: GuideIndexItem[] = []
  private componentCache = new Map<string, ComponentMeta>()
  private guideCache = new Map<string, GuideMeta>()

  private constructor(private readonly dataDir: URL) {}

  static async open(dataDir?: URL): Promise<DataRepository> {
    const repo = new DataRepository(dataDir ?? defaultDataDir())
    await repo.load()
    return repo
  }

  private async load(): Promise<void> {
    this.manifest = await readJson(this.dataDir, 'manifest.json')
    this.index = await readJson(this.dataDir, 'components.index.json')
    this.icons = await readJson(this.dataDir, 'icons.json')
    this.guidesIndex = await readJson(this.dataDir, 'guides.index.json')
  }

  get libraryVersion(): string {
    return this.manifest.libraryVersion
  }

  getManifest(): LibraryManifest {
    return this.manifest
  }

  getIndex(): ComponentIndexItem[] {
    return this.index
  }

  getGuidesIndex(): GuideIndexItem[] {
    return this.guidesIndex
  }

  getIcons(): IconMeta[] {
    return this.icons
  }

  listComponents(category?: string, kind?: string): ComponentIndexItem[] {
    return this.index.filter(item => !item.parentId && (!category || item.category === category) && (!kind || item.kind === kind))
  }

  resolve(input: string): { item?: ComponentIndexItem; suggestions: string[] } {
    return resolveComponent(this.index, input)
  }

  searchComponents(query: string, category?: string, limit = 8): SearchHit<ComponentIndexItem>[] {
    return searchComponents(this.index, query, category, limit)
  }

  searchIcons(query: string, limit = 20, offset = 0): { total: number; icons: IconMeta[] } {
    return searchIcons(this.icons, query, limit, offset)
  }

  private async loadComponent(id: string): Promise<ComponentMeta> {
    const cached = this.componentCache.get(id)
    if (cached) return cached
    const meta = await readJson<ComponentMeta>(new URL('components/', this.dataDir), `${id}.json`)
    this.componentCache.set(id, meta)
    return meta
  }

  async getComponentScope(input: string): Promise<ComponentScope | undefined> {
    const resolved = this.resolve(input)
    if (!resolved.item) return undefined
    const meta = await this.loadComponent(resolved.item.parentId ?? resolved.item.id)
    const part = meta.parts.find(item => item.name === resolved.item!.name) ?? meta.parts[0]!
    return { item: resolved.item, meta, part, isSubComponent: Boolean(resolved.item.parentId) }
  }

  async getGuide(topic: string): Promise<GuideMeta | undefined> {
    const cached = this.guideCache.get(topic)
    if (cached) return cached
    if (!this.guidesIndex.some(item => item.topic === topic)) return undefined
    const guide = await readJson<GuideMeta>(new URL('guides/', this.dataDir), `${topic}.json`)
    this.guideCache.set(topic, guide)
    return guide
  }
}
