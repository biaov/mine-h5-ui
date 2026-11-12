import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerListComponents(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'list_components',
    {
      title: '列出 mine-h5-ui 组件',
      description: '列出 mine-h5-ui 组件库的全部组件与指南目录，可按分类或组件类型过滤。当你不确定有哪些组件可用时，先调用此工具。',
      inputSchema: {
        category: z.string().optional().describe('组件分类，如 基础组件、表单组件、反馈组件、导航组件、展示组件、业务组件'),
        kind: z.enum(['component', 'api']).optional().describe('组件类型：component 为模板组件，api 为命令式 API 组件')
      }
    },
    async ({ category, kind }) => {
      const items = repo.listComponents(category, kind)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        total: items.length,
        categories: [...new Set(repo.getIndex().filter(item => !item.parentId).map(item => item.category))],
        components: items.map(item => ({
          name: item.name,
          tag: item.tag,
          title: item.title,
          category: item.category,
          kind: item.kind,
          description: item.description
        })),
        guides: repo.getGuidesIndex(),
        next: items[0] ? { tool: 'get_component_api', args: { component: items[0].name } } : undefined
      })
    }
  )
}
