import { readdir, readFile } from 'node:fs/promises'
import type { IconfontJson } from './icons'
import { extractDoc } from './docs'
import { parseComponentExports } from './exports'
import { parseIcons } from './icons'
import { buildData, type ExtractResult, type SourceInfo } from './merge'
import { parseRoutes } from './routes'
import { parseInstallKind, parseSfcSource, parseTypesSource } from './source'

async function readText(root: URL, path: string): Promise<string> {
  return readFile(new URL(path, root), 'utf-8')
}

async function readJson<T>(root: URL, path: string): Promise<T> {
  return JSON.parse(await readText(root, path)) as T
}

export async function extractAll(root: URL): Promise<ExtractResult> {
  const warnings: string[] = []
  const pkg = await readJson<{ version: string }>(root, 'package.json')
  const routes = parseRoutes(await readJson(root, 'examples/config/routes.json'))
  const exports = parseComponentExports(await readText(root, 'packages/components.ts'))
  const icons = parseIcons(await readJson<IconfontJson>(root, 'packages/styles/fonts/iconfont.json'), warnings)

  const docFiles = (await readdir(new URL('examples/docs/', root))).filter(file => file.endsWith('.md'))
  const markdown = new Map<string, string>()
  for (const file of docFiles) {
    markdown.set(file.replace(/\.md$/, ''), await readText(root, `examples/docs/${file}`))
  }

  const docs = new Map<string, ReturnType<typeof extractDoc>>()
  for (const route of routes.components) {
    const text = markdown.get(route.slug)
    if (!text) {
      warnings.push(`doc-missing: ${route.slug}.md`)
      continue
    }
    docs.set(route.slug, extractDoc(text, `Me${route.english}`))
  }

  const sources = new Map<string, SourceInfo>()
  const entries = await readdir(new URL('packages/', root), { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith('Me')) continue
    const dir = `packages/${entry.name}/`
    let indexTs = ''
    try {
      indexTs = await readText(root, `${dir}index.ts`)
    } catch {
      warnings.push(`source-index-missing: ${entry.name}`)
      continue
    }

    let typesText = ''
    try {
      typesText = await readText(root, `${dir}types.ts`)
    } catch {
      typesText = ''
    }
    const parsedTypes = typesText ? parseTypesSource(typesText, `${entry.name}/types.ts`) : { props: [], events: [], types: [] }

    let defaults: Record<string, string> = {}
    try {
      const sfcText = await readText(root, `${dir}index.vue`)
      defaults = parseSfcSource(sfcText, `${entry.name}/index.vue`).defaults
    } catch {
      defaults = {}
    }

    sources.set(entry.name, {
      ...parsedTypes,
      defaults,
      installKind: parseInstallKind(indexTs)
    })
  }

  const guideSlugs = new Set(routes.guides.map(guide => guide.slug))
  for (const slug of markdown.keys()) {
    const isComponent = routes.components.some(route => route.slug === slug)
    if (!isComponent && !guideSlugs.has(slug)) warnings.push(`doc-unmapped: ${slug}.md`)
  }

  return buildData({
    libraryVersion: pkg.version,
    routes,
    exports,
    docs,
    markdown,
    sources,
    icons,
    warnings
  })
}
