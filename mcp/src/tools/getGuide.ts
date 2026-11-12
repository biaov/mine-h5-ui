import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { errorResult, jsonResult } from './result'

const MAX_GUIDE_LENGTH = 60000

export function registerGetGuide(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_guide',
    {
      title: '获取 mine-h5-ui 指南',
      description: '获取安装、快速开始、主题、全局样式变量、开发指南、更新日志、样式类、API 方法、正则校验、组合式 API 等指南文档。',
      inputSchema: {
        topic: z.string().min(1).describe('指南主题：introduce、install、start、theme、var、develop、logs、style、api、regExp、composable')
      }
    },
    async ({ topic }) => {
      const guide = await repo.getGuide(topic)
      if (!guide) {
        return errorResult('GUIDE_NOT_FOUND', `未找到指南 '${topic}'`, { available: repo.getGuidesIndex().map(item => item.topic) })
      }
      const truncated = guide.markdown.length > MAX_GUIDE_LENGTH
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        topic: guide.topic,
        title: guide.title,
        category: guide.category,
        kind: guide.kind,
        markdown: truncated ? guide.markdown.slice(0, MAX_GUIDE_LENGTH) : guide.markdown,
        truncated
      })
    }
  )
}
