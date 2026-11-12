export interface ComponentRoute {
  title: string
  english: string
  zhName: string
  slug: string
  category: string
}

export interface GuideRoute {
  title: string
  slug: string
  category: string
  kind: 'guide' | 'utility'
}

export interface RoutesData {
  components: ComponentRoute[]
  guides: GuideRoute[]
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

export function slugFromTitle(title: string): string {
  const first = title.trim().split(/\s+/)[0] ?? ''
  if (/^[A-Z]{2,}$/.test(first)) return first.toLowerCase()
  if (/^[A-Za-z]/.test(first)) return lowerFirst(first)
  if (title.includes('组合式')) return 'composable'
  return lowerFirst(title.replace(/\s+/g, ''))
}

function toComponentRoute(value: unknown, category: string): ComponentRoute {
  const title = String(value).trim()
  const [english = '', ...rest] = title.split(/\s+/)
  return { title, english, zhName: rest.join(' '), slug: slugFromTitle(title), category }
}

function toGuideRoute(value: unknown, category: string, kind: 'guide' | 'utility'): GuideRoute {
  const title = String(value).trim()
  return { title, slug: slugFromTitle(title), category, kind }
}

export function parseRoutes(json: unknown): RoutesData {
  const data = json as Record<string, unknown>
  const components: ComponentRoute[] = []
  const guides: GuideRoute[] = []

  const guideList = data['指南']
  if (Array.isArray(guideList)) {
    for (const item of guideList) guides.push(toGuideRoute(item, '指南', 'guide'))
  }

  const componentGroups = data['组件']
  if (componentGroups && typeof componentGroups === 'object') {
    for (const [category, list] of Object.entries(componentGroups as Record<string, unknown>)) {
      if (!Array.isArray(list)) continue
      for (const item of list) components.push(toComponentRoute(item, category))
    }
  }

  const wrapperGroups = data['封装']
  if (wrapperGroups && typeof wrapperGroups === 'object') {
    for (const [category, list] of Object.entries(wrapperGroups as Record<string, unknown>)) {
      if (!Array.isArray(list)) continue
      for (const item of list) guides.push(toGuideRoute(item, category, 'utility'))
    }
  }

  return { components, guides }
}
