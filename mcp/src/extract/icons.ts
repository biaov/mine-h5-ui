import type { IconMeta } from '../types'

export interface IconfontGlyph {
  name: string
  font_class: string
  unicode: string
}

export interface IconfontJson {
  glyphs: IconfontGlyph[]
}

export function parseIcons(json: IconfontJson, warnings: string[]): IconMeta[] {
  const icons: IconMeta[] = []
  const seen = new Set<string>()

  for (const glyph of json.glyphs) {
    const name = `icon-${glyph.font_class}`
    if (seen.has(name)) {
      warnings.push(`icon-name-duplicated: ${name}`)
      continue
    }
    seen.add(name)
    icons.push({ name, label: glyph.name, fontClass: glyph.font_class, unicode: glyph.unicode })
  }

  return icons
}
