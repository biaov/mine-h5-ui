export interface ExportInfo {
  exportName: string
  category: string
  comment: string
}

const SECTION_RE = /\/\*\s*(.+?)\s+start\s*\*\//g
const EXPORT_RE = /export\s+\*\s+from\s+'\.\/(Me\w+)'\s*(?:\/\/\s*(.*))?/g

export function parseComponentExports(text: string): Map<string, ExportInfo> {
  const result = new Map<string, ExportInfo>()
  const sections: { index: number; category: string }[] = []

  for (const match of text.matchAll(SECTION_RE)) {
    sections.push({ index: match.index ?? 0, category: match[1]!.trim() })
  }

  for (const match of text.matchAll(EXPORT_RE)) {
    const index = match.index ?? 0
    const category = sections.filter(section => section.index <= index).at(-1)?.category ?? '未分类'
    const exportName = match[1]!
    const comment = (match[2] ?? '').trim()
    result.set(exportName, { exportName, category, comment })
  }

  return result
}
