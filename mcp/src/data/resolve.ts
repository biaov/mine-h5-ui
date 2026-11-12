import type { ComponentIndexItem } from '../types'

export interface ResolveResult {
  item?: ComponentIndexItem
  suggestions: string[]
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '')
}

function aliasKeys(item: ComponentIndexItem): string[] {
  return [item.name, item.tag, item.id, item.zhName, item.title, item.name.replace(/^Me/, '')].map(normalize)
}

function editDistance(left: string, right: string): number {
  const rows = Array.from({ length: left.length + 1 }, (_, index) => [index])
  for (let column = 1; column <= right.length; column++) rows[0]![column] = column
  for (let row = 1; row <= left.length; row++) {
    for (let column = 1; column <= right.length; column++) {
      rows[row]![column] = Math.min(
        rows[row - 1]![column]! + 1,
        rows[row]![column - 1]! + 1,
        rows[row - 1]![column - 1]! + (left[row - 1] === right[column - 1] ? 0 : 1)
      )
    }
  }
  return rows[left.length]![right.length]!
}

export function buildAliasMap(index: ComponentIndexItem[]): Map<string, ComponentIndexItem> {
  const map = new Map<string, ComponentIndexItem>()
  for (const item of index) {
    for (const key of aliasKeys(item)) {
      if (!map.has(key)) map.set(key, item)
    }
  }
  return map
}

export function resolveComponent(index: ComponentIndexItem[], input: string): ResolveResult {
  const map = buildAliasMap(index)
  const key = normalize(input)
  const exact = map.get(key) ?? map.get(normalize(input.replace(/^Me/i, ''))) ?? map.get(`me${key}`)
  if (exact) return { item: exact, suggestions: [] }

  const isCjk = /[一-龥]/.test(key)
  const suggestions = index
    .map(item => {
      let distance = Number.POSITIVE_INFINITY
      for (const candidate of aliasKeys(item)) {
        if (isCjk) {
          if (candidate.includes(key) || key.includes(candidate)) distance = Math.min(distance, 1)
        } else {
          distance = Math.min(distance, editDistance(key, candidate))
        }
      }
      return { item, distance }
    })
    .filter(entry => entry.distance <= (isCjk ? 1 : 2))
    .sort((left, right) => left.distance - right.distance)
    .slice(0, 3)
    .map(entry => entry.item.name)

  return { suggestions: [...new Set(suggestions)] }
}
