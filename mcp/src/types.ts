export type ComponentKind = 'component' | 'api'
export type GuideKind = 'guide' | 'utility'

export interface LibraryManifest {
  name: string
  libraryVersion: string
  generatedAt: string
  counts: { components: number; guides: number; icons: number }
  warnings: string[]
  hash: string
}

export interface ComponentIndexItem {
  id: string
  name: string
  tag: string
  title: string
  zhName: string
  category: string
  kind: ComponentKind
  parentId?: string
  description: string
  keywords: string[]
  docUrl: string
}

export interface ComponentMeta extends ComponentIndexItem {
  importCode: string
  stylePath: string
  parts: ComponentPart[]
  examples: ExampleMeta[]
  markdown: string
}

export interface ComponentPart {
  name: string
  props: PropMeta[]
  events: EventMeta[]
  slots: SlotMeta[]
  methods: MethodMeta[]
  types: TypeMeta[]
  extraTables: RawTable[]
}

export interface PropMeta {
  name: string
  type: string
  required: boolean
  default?: string
  values?: string[]
  description?: string
  since?: string
  vModel?: boolean
  source: 'ts' | 'doc' | 'both'
}

export interface EventMeta {
  name: string
  params?: string
  description?: string
  since?: string
}

export interface SlotMeta {
  name: string
  description?: string
  scoped?: string
  since?: string
}

export interface MethodMeta {
  name: string
  description?: string
  params?: string
  since?: string
}

export interface TypeMeta {
  name: string
  definition: string
}

export interface RawTable {
  title: string
  rows: string[][]
}

export interface ExampleMeta {
  title: string
  description: string
  blocks: { language: string; code: string }[]
}

export interface GuideIndexItem {
  topic: string
  title: string
  category: string
  kind: GuideKind
}

export interface GuideMeta extends GuideIndexItem {
  markdown: string
}

export interface IconMeta {
  name: string
  label: string
  fontClass: string
  unicode: string
}

export interface GeneratedBundle {
  manifest: LibraryManifest
  index: ComponentIndexItem[]
  components: Map<string, ComponentMeta>
  guides: GuideMeta[]
  icons: IconMeta[]
  warnings: string[]
}
