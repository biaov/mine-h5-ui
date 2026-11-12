import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { jsonResult } from './result'

export function registerSearchIcons(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'search_icons',
    {
      title: '检索 mine-h5-ui 图标',
      description: '检索 mine-h5-ui 内置图标，返回可直接用于 <me-icon name="..."> 的名称。支持英文 class 名与 iconfont 中的中文名称。',
      inputSchema: {
        query: z.string().optional().describe('检索词，例如 close、关闭、loading；留空返回全部图标'),
        limit: z.number().int().min(1).max(100).default(20).describe('返回数量，默认 20'),
        offset: z.number().int().min(0).default(0).describe('分页偏移，默认 0')
      }
    },
    async ({ query, limit, offset }) => {
      const result = repo.searchIcons(query ?? '', limit, offset)
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        query: query ?? null,
        total: result.total,
        offset,
        limit,
        icons: result.icons.map(icon => ({ ...icon, usage: `<me-icon name="${icon.name}" />` }))
      })
    }
  )
}
