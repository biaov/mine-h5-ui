import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { extractSectionText, findHeading, flattenHeadings, parseMarkdown } from '../extract/markdown'
import { errorResult, jsonResult } from './result'

const MAX_DOC_LENGTH = 60000

export function registerGetComponentDoc(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_doc',
    {
      title: '获取 mine-h5-ui 组件文档',
      description: '获取组件的原始 Markdown 文档，或其中某个章节。需要完整说明、注意事项或示例上下文时使用。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、button、按钮 等写法'),
        section: z.string().optional().describe('章节标题或其前缀，例如 API、代码演示、Slots')
      }
    },
    async ({ component, section }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      let markdown = scope.meta.markdown
      if (section) {
        const parsed = parseMarkdown(markdown)
        const node = findHeading(parsed.headings, item => item.title.trim().startsWith(section.trim()))
        if (!node) {
          return errorResult('SECTION_NOT_FOUND', `组件 ${scope.item.name} 中未找到章节 '${section}'`, {
            available: flattenHeadings(parsed.headings).map(item => item.title)
          })
        }
        markdown = extractSectionText(markdown, node)
      }

      const truncated = markdown.length > MAX_DOC_LENGTH
      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: { name: scope.item.name, title: scope.meta.title, docUrl: scope.meta.docUrl },
        section: section ?? null,
        markdown: truncated ? markdown.slice(0, MAX_DOC_LENGTH) : markdown,
        truncated,
        note: scope.isSubComponent ? `文档来自父组件 ${scope.meta.name}。` : undefined
      })
    }
  )
}
