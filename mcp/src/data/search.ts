import type { ComponentIndexItem, IconMeta } from '../types'

export interface SearchHit<T> {
  item: T
  score: number
  matchedOn: string[]
}

function tokenize(query: string): string[] {
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
}

function matchScore(value: string | undefined, token: string, exactScore: number, prefixScore: number, includesScore: number): number {
  if (!value) return 0
  const text = value.toLowerCase()
  if (text === token) return exactScore
  if (text.startsWith(token)) return prefixScore
  if (text.includes(token)) return includesScore
  return 0
}

export function scoreComponent(item: ComponentIndexItem, query: string): SearchHit<ComponentIndexItem> {
  const tokens = tokenize(query)
  if (!tokens.length) return { item, score: 0, matchedOn: [] }

  let score = 0
  const matchedOn = new Set<string>()

  for (const token of tokens) {
    const nameScore = matchScore(item.name, token, 100, 70, 55) || matchScore(item.tag, token, 100, 70, 55) || matchScore(item.id, token, 100, 70, 55)
    const titleScore = matchScore(item.zhName, token, 90, 70, 55) || matchScore(item.title, token, 90, 70, 55)
    const descriptionScore = matchScore(item.description, token, 40, 40, 40)
    const categoryScore = matchScore(item.category, token, 10, 10, 10)
    const keywordScore = item.keywords.some(keyword => keyword.toLowerCase().includes(token)) ? 30 : 0

    score += Math.max(nameScore, titleScore) + descriptionScore + categoryScore + keywordScore
    if (nameScore) matchedOn.add('name')
    if (titleScore) matchedOn.add('title')
    if (descriptionScore) matchedOn.add('description')
    if (keywordScore) matchedOn.add('keywords')
    if (categoryScore) matchedOn.add('category')
  }

  return { item, score, matchedOn: [...matchedOn] }
}

export function searchComponents(index: ComponentIndexItem[], query: string, category: string | undefined, limit: number): SearchHit<ComponentIndexItem>[] {
  return index
    .filter(item => !category || item.category === category)
    .map(item => scoreComponent(item, query))
    .filter(hit => hit.score > 0)
    .sort((left, right) => right.score - left.score || left.item.name.localeCompare(right.item.name))
    .slice(0, limit)
}

export function searchIcons(icons: IconMeta[], query: string, limit: number, offset: number): { total: number; icons: IconMeta[] } {
  const tokens = tokenize(query)
  if (!tokens.length) {
    return { total: icons.length, icons: icons.slice(offset, offset + limit) }
  }

  const scored = icons
    .map(icon => {
      let score = 0
      for (const token of tokens) {
        score += matchScore(icon.name, token, 100, 80, 60)
        score += matchScore(icon.label, token, 100, 80, 60)
        score += matchScore(icon.fontClass, token, 100, 80, 60)
      }
      return { icon, score }
    })
    .filter(hit => hit.score > 0)
    .sort((left, right) => right.score - left.score || left.icon.name.localeCompare(right.icon.name))

  return { total: scored.length, icons: scored.slice(offset, offset + limit).map(hit => hit.icon) }
}
