import { z } from 'zod'

export const propMetaSchema = z.object({
  name: z.string(),
  type: z.string(),
  required: z.boolean(),
  default: z.string().optional(),
  values: z.array(z.string()).optional(),
  description: z.string().optional(),
  since: z.string().optional(),
  vModel: z.boolean().optional(),
  source: z.enum(['ts', 'doc', 'both'])
})

export const eventMetaSchema = z.object({
  name: z.string(),
  params: z.string().optional(),
  description: z.string().optional(),
  since: z.string().optional()
})

export const slotMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  scoped: z.string().optional(),
  since: z.string().optional()
})

export const methodMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  params: z.string().optional(),
  since: z.string().optional()
})

export const typeMetaSchema = z.object({ name: z.string(), definition: z.string() })

export const rawTableSchema = z.object({ title: z.string(), rows: z.array(z.array(z.string())) })

export const componentPartSchema = z.object({
  name: z.string(),
  props: z.array(propMetaSchema),
  events: z.array(eventMetaSchema),
  slots: z.array(slotMetaSchema),
  methods: z.array(methodMetaSchema),
  types: z.array(typeMetaSchema),
  extraTables: z.array(rawTableSchema)
})

export const exampleMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.object({ language: z.string(), code: z.string() }))
})

export const componentIndexItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  tag: z.string(),
  title: z.string(),
  zhName: z.string(),
  category: z.string(),
  kind: z.enum(['component', 'api']),
  parentId: z.string().optional(),
  description: z.string(),
  keywords: z.array(z.string()),
  docUrl: z.string()
})

export const componentMetaSchema = componentIndexItemSchema.extend({
  importCode: z.string(),
  stylePath: z.string(),
  parts: z.array(componentPartSchema).min(1),
  examples: z.array(exampleMetaSchema),
  markdown: z.string()
})

export const guideMetaSchema = z.object({
  topic: z.string(),
  title: z.string(),
  category: z.string(),
  kind: z.enum(['guide', 'utility']),
  markdown: z.string()
})

export const guideIndexItemSchema = guideMetaSchema.omit({ markdown: true })

export const iconMetaSchema = z.object({
  name: z.string().startsWith('icon-'),
  label: z.string(),
  fontClass: z.string(),
  unicode: z.string()
})

export const iconListSchema = z.array(iconMetaSchema)

export const manifestSchema = z.object({
  name: z.string(),
  libraryVersion: z.string(),
  generatedAt: z.string(),
  counts: z.object({ components: z.number().int(), guides: z.number().int(), icons: z.number().int() }),
  warnings: z.array(z.string()),
  hash: z.string()
})
