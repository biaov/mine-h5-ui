import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerSearchComponents(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'search_components',
    {
      title: '检索 mine-h5-ui 组件',
      description: '按中文名、英文名、标签、Props 或示例关键字检索组件。编写页面或选择组件前，用此工具确定应使用哪些组件。',
      inputSchema: {
        query: z.string().min(1).describe('检索词，支持中文或英文，例如 按钮、表单、toast、上传'),
        category: z.string().optional().describe('限定分类，如 表单组件'),
        limit: z.number().int().min(1).max(20).default(8).describe('返回数量，默认 8')
      }
    },
    async ({ query, category, limit }) => {
      const hits = repo.searchComponents(query, category, limit)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        query,
        total: hits.length,
        results: hits.map(hit => ({
          name: hit.item.name,
          tag: hit.item.tag,
          title: hit.item.title,
          category: hit.item.category,
          kind: hit.item.kind,
          score: hit.score,
          matchedOn: hit.matchedOn,
          next: { tool: 'get_component_api', args: { component: hit.item.name } }
        }))
      })
    }
  )
}
