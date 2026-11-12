import type { ComponentPart, EventMeta, ExampleMeta, PropMeta, SlotMeta } from '../types'
import { findHeading, parseMarkdown, type HeadingNode, type TableBlock } from './markdown'

export interface ExtractedDoc {
  title: string
  description: string
  importCode: string
  examples: ExampleMeta[]
  parts: ComponentPart[]
}

type TableKind = 'props' | 'slots' | 'events' | 'extra'

const HEADER_ALIASES: Record<string, string> = {
  '参数': 'name',
  '属性': 'name',
  '属性名': 'name',
  '参数名': 'name',
  'props': 'name',
  '说明': 'description',
  '描述': 'description',
  '功能': 'description',
  '类型': 'type',
  '可选值': 'values',
  '可选': 'values',
  '默认值': 'default',
  '默认': 'default',
  '版本': 'since',
  '方法名': 'name',
  '事件名': 'name',
  '回调参数': 'params',
  '具名插槽': 'name',
  '插槽名': 'name',
  'scopedslots': 'scoped'
}

function mapTable(rows: string[][]): Record<string, string>[] {
  const [header, ...body] = rows
  if (!header) return []
  const keys = header.map(value => HEADER_ALIASES[value.trim().toLowerCase()] ?? value.trim())
  return body.map(row => Object.fromEntries(keys.map((key, index) => [key, (row[index] ?? '').trim()])))
}

function toCamel(value: string): string {
  return value.replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase())
}

function toProp(row: Record<string, string>): PropMeta {
  const rawName = row.name ?? ''
  const vModel = /\(v-model(?::[^)]+)?\)/i.test(rawName)
  const values = row.values && row.values !== '--' && row.values !== '-' ? row.values.split('/').map(value => value.trim()).filter(Boolean) : undefined
  return {
    name: toCamel(rawName.replace(/\(v-model(?::[^)]+)?\)/gi, '').trim()),
    type: row.type || 'unknown',
    required: false,
    default: row.default && row.default !== '--' ? row.default : undefined,
    values,
    description: row.description || undefined,
    since: row.since && row.since !== '--' ? row.since : undefined,
    vModel: vModel || undefined,
    source: 'doc'
  }
}

function toSlot(row: Record<string, string>): SlotMeta {
  return {
    name: row.name ?? '',
    description: row.description || undefined,
    scoped: row.scoped && row.scoped !== '--' ? row.scoped : undefined,
    since: row.since && row.since !== '--' ? row.since : undefined
  }
}

function toEvent(row: Record<string, string>): EventMeta {
  return {
    name: row.name ?? '',
    params: row.params && row.params !== '--' ? row.params : undefined,
    description: row.description || undefined,
    since: row.since && row.since !== '--' ? row.since : undefined
  }
}

function classify(title: string): TableKind | undefined {
  const text = title.toLowerCase()
  if (/参数|props|属性/.test(text)) return 'props'
  if (/slots|插槽/.test(text)) return 'slots'
  if (/方法|事件|events|emits/.test(text)) return 'events'
  if (/option|rules|回调|数据/.test(text)) return 'extra'
  return undefined
}

function isPartHeading(title: string): boolean {
  return /^Me[A-Za-z0-9]+$/.test(title.trim())
}

function ownTables(node: HeadingNode, tables: TableBlock[]): TableBlock[] {
  const limit = node.children.length ? node.children[0]!.line : node.endLine + 1
  return tables.filter(table => table.line > node.line && table.line < limit)
}

function emptyPart(name: string): ComponentPart {
  return { name, props: [], events: [], slots: [], methods: [], types: [], extraTables: [] }
}

function extractParts(markdown: string, fallbackName: string, parsed = parseMarkdown(markdown)): ComponentPart[] {
  const api = findHeading(parsed.headings, node => node.level === 2 && node.title.trim() === 'API')
  if (!api) return [emptyPart(fallbackName)]

  const parts = new Map<string, ComponentPart>()
  let currentPart = fallbackName

  const ensure = (name: string): ComponentPart => {
    let part = parts.get(name)
    if (!part) {
      part = emptyPart(name)
      parts.set(name, part)
    }
    return part
  }

  const walk = (node: HeadingNode, inheritedKind?: TableKind): void => {
    const title = node.title.trim()
    if (isPartHeading(title)) {
      currentPart = title
      ensure(currentPart)
    }

    const kind = classify(title) ?? inheritedKind
    const tables = ownTables(node, parsed.tables)

    if (tables.length) {
      const part = ensure(currentPart)
      if (kind === 'props') {
        for (const table of tables) part.props.push(...mapTable(table.rows).map(toProp))
      } else if (kind === 'slots') {
        for (const table of tables) part.slots.push(...mapTable(table.rows).map(toSlot))
      } else if (kind === 'events') {
        for (const table of tables) part.events.push(...mapTable(table.rows).map(toEvent))
      } else if (kind === 'extra') {
        for (const table of tables) part.extraTables.push({ title, rows: table.rows })
      }
    }

    for (const child of node.children) walk(child, kind)
  }

  walk(api)
  return parts.size ? [...parts.values()] : [emptyPart(fallbackName)]
}

function extractDescription(text: string): string {
  const lines = text.split(/\r?\n/)
  let inContent = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (!inContent) {
      if (/^#\s+/.test(trimmed)) inContent = true
      continue
    }
    if (!trimmed || trimmed === '---' || /^##\s+/.test(trimmed)) {
      if (/^##\s+/.test(trimmed)) return ''
      continue
    }
    if (/^[-*>|#`]/.test(trimmed)) continue
    return trimmed
  }
  return ''
}

function extractExamples(markdown: string, parsed = parseMarkdown(markdown)): ExampleMeta[] {
  const demo = findHeading(parsed.headings, node => node.level === 2 && node.title.trim() === '代码演示')
  if (!demo) return []

  return demo.children.map(node => {
    const fences = parsed.fences.filter(fence => fence.line > node.line && fence.line <= node.endLine)
    const lines = markdown.split(/\r?\n/).slice(node.line + 1, node.endLine === Number.MAX_SAFE_INTEGER ? undefined : node.endLine + 1)
    const description = lines
      .map(line => line.trim())
      .filter(line => /^-\s+/.test(line))
      .map(line => line.replace(/^-\s+/, '').trim())
      .join(' ')
    return {
      title: node.title.trim(),
      description,
      blocks: fences.map(fence => ({ language: fence.language, code: fence.content.trim() }))
    }
  })
}

function extractImportCode(markdown: string, parsed = parseMarkdown(markdown)): string {
  const section = findHeading(parsed.headings, node => node.level === 2 && node.title.includes('按需引入'))
  if (!section) return ''
  return parsed.fences.find(fence => fence.line > section.line && fence.line <= section.endLine)?.content.trim() ?? ''
}

export function extractDoc(markdown: string, fallbackName: string): ExtractedDoc {
  const parsed = parseMarkdown(markdown)
  const h1 = findHeading(parsed.headings, node => node.level === 1)
  return {
    title: h1?.title.trim() ?? fallbackName,
    description: extractDescription(markdown),
    importCode: extractImportCode(markdown, parsed),
    examples: extractExamples(markdown, parsed),
    parts: extractParts(markdown, fallbackName, parsed)
  }
}
