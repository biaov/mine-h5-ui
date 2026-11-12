import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import type { ComponentPart } from '../types'
import { errorResult, jsonResult } from './result'

const INCLUDE = ['props', 'events', 'slots', 'methods', 'types'] as const
type Include = (typeof INCLUDE)[number]

function filterPart(part: ComponentPart, include: Include[]): Record<string, unknown> {
  const value: Record<string, unknown> = { name: part.name }
  if (include.includes('props')) value.props = part.props
  if (include.includes('events')) value.events = part.events
  if (include.includes('slots')) value.slots = part.slots
  if (include.includes('methods')) value.methods = part.methods
  if (include.includes('types')) value.types = part.types
  if (part.extraTables.length) value.extraTables = part.extraTables
  return value
}

export function registerGetComponentApi(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_api',
    {
      title: '获取 mine-h5-ui 组件 API',
      description: '获取组件的 Props、Events、Slots、Methods 与类型定义，包含类型、可选值、默认值、必填性与版本。生成或修改组件代码前必须调用，不要凭记忆猜测 API。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、me-button、button、按钮 等写法'),
        include: z.array(z.enum(INCLUDE)).optional().describe('需要返回的 API 分区，默认全部'),
        include_examples: z.boolean().optional().describe('是否同时返回示例标题与代码，默认 false')
      }
    },
    async ({ component, include, include_examples }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      const parts = scope.isSubComponent ? [scope.part] : scope.meta.parts
      const selected = include?.length ? include : [...INCLUDE]
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: {
          id: scope.meta.id,
          name: scope.meta.name,
          tag: scope.meta.tag,
          title: scope.meta.title,
          zhName: scope.meta.zhName,
          category: scope.meta.category,
          kind: scope.meta.kind,
          description: scope.meta.description,
          import: scope.meta.importCode,
          style: scope.meta.stylePath,
          docUrl: scope.meta.docUrl
        },
        parts: parts.map(part => filterPart(part, selected)),
        note: scope.isSubComponent ? `${scope.item.name} 是复合组件 ${scope.meta.name} 的子组件，仅为该子组件的 API。` : undefined,
        examples: include_examples ? scope.meta.examples : undefined,
        next: { tool: 'get_component_examples', args: { component: scope.item.name } }
      })
    }
  )
}
