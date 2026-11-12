import { createHash } from 'node:crypto'
import type { ComponentIndexItem, ComponentMeta, ComponentPart, EventMeta, GuideMeta, IconMeta, LibraryManifest, PropMeta } from '../types'
import type { ExtractedDoc } from './docs'
import type { ExportInfo } from './exports'
import type { ComponentRoute, GuideRoute } from './routes'
import type { ParsedTypesSource } from './source'

export interface SourceInfo extends ParsedTypesSource {
  defaults: Record<string, string>
  installKind: 'component' | 'api'
}

export interface BuildInput {
  libraryVersion: string
  routes: { components: ComponentRoute[]; guides: GuideRoute[] }
  exports: Map<string, ExportInfo>
  docs: Map<string, ExtractedDoc>
  markdown: Map<string, string>
  sources: Map<string, SourceInfo>
  icons: IconMeta[]
  warnings: string[]
}

export interface ExtractResult {
  manifest: LibraryManifest
  index: ComponentIndexItem[]
  components: Map<string, ComponentMeta>
  guides: GuideMeta[]
  icons: IconMeta[]
  warnings: string[]
}

export function kebab(name: string): string {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function emptyPart(name: string): ComponentPart {
  return { name, props: [], events: [], slots: [], methods: [], types: [], extraTables: [] }
}

function mergePart(docPart: ComponentPart, source: SourceInfo | undefined, warnings: string[]): ComponentPart {
  const props = new Map<string, PropMeta>()
  for (const prop of docPart.props) props.set(prop.name, { ...prop, source: 'doc' })

  if (source) {
    for (const prop of source.props) {
      const docProp = props.get(prop.name)
      const defaultValue = source.defaults[prop.name]
      if (docProp) {
        props.set(prop.name, {
          ...docProp,
          type: prop.type,
          required: prop.required,
          description: docProp.description || prop.description,
          default: defaultValue ?? docProp.default,
          source: 'both'
        })
      } else {
        warnings.push(`prop-not-documented: ${docPart.name}.${prop.name}`)
        props.set(prop.name, { ...prop, default: defaultValue, source: 'ts' })
      }
    }
    for (const docProp of docPart.props) {
      if (!source.props.some(prop => prop.name === docProp.name)) warnings.push(`prop-not-in-ts: ${docPart.name}.${docProp.name}`)
    }
  }

  const events = new Map<string, EventMeta>()
  for (const event of docPart.events) events.set(event.name, event)
  for (const event of source?.events ?? []) {
    const existing = events.get(event.name)
    events.set(event.name, existing ? { ...existing, params: existing.params ?? event.params, description: existing.description ?? event.description } : event)
  }

  return {
    name: docPart.name,
    props: [...props.values()],
    events: [...events.values()],
    slots: docPart.slots,
    methods: docPart.methods,
    types: source?.types ?? [],
    extraTables: docPart.extraTables
  }
}

function buildKeywords(parts: ComponentPart[], examples: ExtractedDoc['examples']): string[] {
  const values = new Set<string>()
  for (const part of parts) {
    for (const prop of part.props) values.add(prop.name)
    for (const event of part.events) values.add(event.name)
    for (const slot of part.slots) values.add(slot.name)
    for (const type of part.types) values.add(type.name)
  }
  for (const example of examples) values.add(example.title)
  return [...values].slice(0, 80)
}

function toIndexItem(meta: ComponentMeta): ComponentIndexItem {
  return {
    id: meta.id,
    name: meta.name,
    tag: meta.tag,
    title: meta.title,
    zhName: meta.zhName,
    category: meta.category,
    kind: meta.kind,
    description: meta.description,
    keywords: meta.keywords,
    docUrl: meta.docUrl
  }
}

function primaryName(route: ComponentRoute, doc: ExtractedDoc, sources: Map<string, SourceInfo>, exports: Map<string, ExportInfo>): string {
  const candidate = `Me${route.english}`
  if (sources.has(candidate) || exports.has(candidate)) return candidate
  return doc.parts.find(part => part.name.toLowerCase() === candidate.toLowerCase())?.name ?? doc.parts[0]?.name ?? candidate
}

export function buildData(input: BuildInput): ExtractResult {
  const warnings = [...input.warnings]
  const components = new Map<string, ComponentMeta>()
  const index: ComponentIndexItem[] = []
  const guides: GuideMeta[] = []

  for (const route of input.routes.components) {
    const doc = input.docs.get(route.slug)
    if (!doc) {
      warnings.push(`doc-missing: ${route.slug}.md`)
      continue
    }

    const name = primaryName(route, doc, input.sources, input.exports)
    const docParts = doc.parts.length ? doc.parts : [emptyPart(name)]
    const merged = docParts.map(part => mergePart(part, input.sources.get(part.name), warnings))
    merged.sort((left, right) => {
      if (left.name === name) return -1
      if (right.name === name) return 1
      return 0
    })

    const source = input.sources.get(name)
    const meta: ComponentMeta = {
      id: route.slug,
      name,
      tag: kebab(name),
      title: route.title,
      zhName: route.zhName,
      category: route.category,
      kind: source?.installKind === 'api' ? 'api' : 'component',
      description: doc.description || input.exports.get(name)?.comment || '',
      keywords: buildKeywords(merged, doc.examples),
      docUrl: `https://mineh5ui.biaov.cn/v2/doc/${route.slug}`,
      importCode: doc.importCode || `import { ${name} } from 'mine-h5-ui'`,
      stylePath: `mine-h5-ui/styles/${name}.css`,
      parts: merged,
      examples: doc.examples,
      markdown: input.markdown.get(route.slug) ?? ''
    }

    components.set(route.slug, meta)
    index.push(toIndexItem(meta))

    for (const part of merged) {
      if (part.name === name) continue
      index.push({
        ...toIndexItem(meta),
        name: part.name,
        tag: kebab(part.name),
        parentId: route.slug
      })
    }
  }

  for (const route of input.routes.guides) {
    const markdown = input.markdown.get(route.slug)
    if (!markdown) {
      warnings.push(`guide-missing: ${route.slug}.md`)
      continue
    }
    guides.push({
      topic: route.slug,
      title: route.title,
      category: route.category,
      kind: route.kind,
      markdown
    })
  }

  const hash = createHash('sha256')
    .update(JSON.stringify([...components.values()]))
    .update(JSON.stringify(guides))
    .update(JSON.stringify(input.icons))
    .digest('hex')
    .slice(0, 12)

  const manifest: LibraryManifest = {
    name: 'mine-h5-ui',
    libraryVersion: input.libraryVersion,
    generatedAt: new Date().toISOString(),
    counts: { components: index.filter(item => !item.parentId).length, guides: guides.length, icons: input.icons.length },
    warnings,
    hash
  }

  return { manifest, index, components, guides, icons: input.icons, warnings }
}
