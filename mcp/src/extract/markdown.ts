import MarkdownIt from 'markdown-it'

export interface HeadingNode {
  level: number
  title: string
  line: number
  endLine: number
  children: HeadingNode[]
}

export interface FenceBlock {
  line: number
  language: string
  content: string
}

export interface TableBlock {
  line: number
  rows: string[][]
}

export interface ParsedMarkdown {
  headings: HeadingNode[]
  fences: FenceBlock[]
  tables: TableBlock[]
}

interface FlatHeading {
  level: number
  title: string
  line: number
}

const md = new MarkdownIt({ html: false })

export function parseMarkdown(text: string): ParsedMarkdown {
  const tokens = md.parse(text, {})
  const flat: FlatHeading[] = []
  const fences: FenceBlock[] = []
  const tables: TableBlock[] = []
  let table: string[][] | null = null
  let tableLine = 0
  let row: string[] | null = null

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index]!
    if (token.type === 'heading_open') {
      flat.push({ level: Number(token.tag.slice(1)), title: tokens[index + 1]?.content.trim() ?? '', line: token.map?.[0] ?? 0 })
    } else if (token.type === 'fence') {
      fences.push({ line: token.map?.[0] ?? 0, language: token.info.trim().split(/\s+/)[0] || 'text', content: token.content })
    } else if (token.type === 'table_open') {
      table = []
      tableLine = token.map?.[0] ?? 0
    } else if (token.type === 'tr_open') {
      row = []
    } else if (token.type === 'th_open' || token.type === 'td_open') {
      row?.push(tokens[index + 1]?.content.trim() ?? '')
    } else if (token.type === 'tr_close' && table && row) {
      table.push(row)
      row = null
    } else if (token.type === 'table_close' && table) {
      tables.push({ line: tableLine, rows: table })
      table = null
    }
  }

  return { headings: buildTree(flat), fences, tables }
}

function buildTree(flat: FlatHeading[]): HeadingNode[] {
  const roots: HeadingNode[] = []
  const stack: HeadingNode[] = []
  const all: HeadingNode[] = []

  for (const item of flat) {
    const node: HeadingNode = { ...item, endLine: Number.MAX_SAFE_INTEGER, children: [] }
    while (stack.length && stack[stack.length - 1]!.level >= node.level) stack.pop()
    const parent = stack[stack.length - 1]
    if (parent) parent.children.push(node)
    else roots.push(node)
    stack.push(node)
    all.push(node)
  }

  for (let index = 0; index < all.length; index++) {
    const node = all[index]!
    const next = all.slice(index + 1).find(item => item.level <= node.level)
    node.endLine = next ? next.line - 1 : Number.MAX_SAFE_INTEGER
  }

  return roots
}

export function findHeading(nodes: HeadingNode[], predicate: (node: HeadingNode) => boolean): HeadingNode | undefined {
  for (const node of nodes) {
    if (predicate(node)) return node
    const found = findHeading(node.children, predicate)
    if (found) return found
  }
  return undefined
}

export function flattenHeadings(nodes: HeadingNode[]): HeadingNode[] {
  return nodes.flatMap(node => [node, ...flattenHeadings(node.children)])
}

export function extractSectionText(text: string, node: HeadingNode): string {
  const lines = text.split(/\r?\n/)
  const end = node.endLine === Number.MAX_SAFE_INTEGER ? lines.length : node.endLine + 1
  return lines.slice(node.line, end).join('\n').trim()
}
