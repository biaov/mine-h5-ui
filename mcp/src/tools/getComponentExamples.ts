import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import type { DataRepository } from '../data/loader'
import { errorResult, jsonResult } from './result'

function clip(code: string): { code: string; truncated?: boolean } {
  return code.length > 4000 ? { code: `${code.slice(0, 4000)}\n/* ... truncated ... */`, truncated: true } : { code }
}

export function registerGetComponentExamples(server: McpServer, repo: DataRepository): void {
  server.registerTool(
    'get_component_examples',
    {
      title: '获取 mine-h5-ui 组件示例',
      description: '获取组件官方文档中的代码示例，可按场景关键字过滤。生成页面或不确定写法时使用，优先复用官方示例而不是自行编写。',
      inputSchema: {
        component: z.string().min(1).describe('组件名，支持 MeButton、button、按钮 等写法'),
        scenario: z.string().optional().describe('场景关键字，如 校验、禁用、自定义颜色'),
        limit: z.number().int().min(1).max(10).default(3).describe('返回示例数量，默认 3')
      }
    },
    async ({ component, scenario, limit }) => {
      const scope = await repo.getComponentScope(component)
      if (!scope) {
        const resolved = repo.resolve(component)
        return errorResult('COMPONENT_NOT_FOUND', `未找到组件 '${component}'`, { suggestions: resolved.suggestions })
      }

      const all = scope.meta.examples
      const tokens = (scenario ?? '').trim().toLowerCase().split(/\s+/).filter(Boolean)
      const matchedExamples = tokens.length
        ? all.filter(example => {
            const text = [example.title, example.description, ...example.blocks.map(block => block.code)].join(' ').toLowerCase()
            return tokens.every(token => text.includes(token))
          })
        : all
      const matched = matchedExamples.length > 0
      const examples = (matched ? matchedExamples : all).slice(0, limit).map(example => ({
        title: example.title,
        description: example.description,
        blocks: example.blocks.map(block => ({ language: block.language, ...clip(block.code) }))
      }))

      return jsonResult({
        library: `mine-h5-ui@${repo.libraryVersion}`,
        component: { name: scope.item.name, title: scope.meta.title, import: scope.meta.importCode, style: scope.meta.stylePath },
        scenario: scenario ?? null,
        matched,
        total: matched ? matchedExamples.length : all.length,
        examples,
        note: scope.isSubComponent ? `示例来自父文档 ${scope.meta.name}。` : undefined,
        next: { tool: 'get_component_doc', args: { component: scope.item.name, section: 'API' } }
      })
    }
  )
}
