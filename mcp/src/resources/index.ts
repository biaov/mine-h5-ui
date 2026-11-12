import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'

function text(uri: URL, value: string): { contents: { uri: string; text: string; mimeType: string }[] } {
  return { contents: [{ uri: uri.href, text: value, mimeType: 'application/json' }] }
}

function firstVariable(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
}

export function registerResources(server: McpServer, repo: DataRepository): void {
  server.registerResource(
    'index',
    'mineh5ui://index',
    { title: 'mine-h5-ui 总览', description: '组件分类、指南目录、图标数量与组件库版本', mimeType: 'application/json' },
    async uri => {
      const components = repo.getIndex().filter(item => !item.parentId)
      return text(
        uri,
        JSON.stringify(
          {
            library: `mine-h5-ui@${repo.libraryVersion}`,
            manifest: repo.getManifest(),
            categories: [...new Set(components.map(item => item.category))],
            components: components.map(item => ({ name: item.name, tag: item.tag, title: item.title, category: item.category })),
            guides: repo.getGuidesIndex()
          },
          null,
          2
        )
      )
    }
  )

  server.registerResource(
    'component',
    new ResourceTemplate('mineh5ui://components/{id}', {
      list: async () => ({
        resources: repo
          .getIndex()
          .filter(item => !item.parentId)
          .map(item => ({ uri: `mineh5ui://components/${item.id}`, name: item.name, title: item.title, mimeType: 'application/json' }))
      })
    }),
    { title: '组件元数据', description: '单个组件的 API、示例与导入方式', mimeType: 'application/json' },
    async (uri, variables) => {
      const id = firstVariable(variables.id)
      const scope = await repo.getComponentScope(id)
      if (!scope) throw new Error(`component not found: ${id}`)
      return text(
        uri,
        JSON.stringify(
          {
            library: `mine-h5-ui@${repo.libraryVersion}`,
            component: { ...scope.item, import: scope.meta.importCode, style: scope.meta.stylePath },
            parts: scope.meta.parts,
            examples: scope.meta.examples
          },
          null,
          2
        )
      )
    }
  )

  server.registerResource(
    'component-doc',
    new ResourceTemplate('mineh5ui://components/{id}/doc', { list: undefined }),
    { title: '组件文档', description: '组件原始 Markdown 文档', mimeType: 'text/markdown' },
    async (uri, variables) => {
      const id = firstVariable(variables.id)
      const scope = await repo.getComponentScope(id)
      if (!scope) throw new Error(`component not found: ${id}`)
      return { contents: [{ uri: uri.href, text: scope.meta.markdown, mimeType: 'text/markdown' }] }
    }
  )

  server.registerResource(
    'guide',
    new ResourceTemplate('mineh5ui://guides/{topic}', {
      list: async () => ({
        resources: repo.getGuidesIndex().map(item => ({ uri: `mineh5ui://guides/${item.topic}`, name: item.topic, title: item.title, mimeType: 'text/markdown' }))
      })
    }),
    { title: '指南文档', description: '安装、主题、API、组合式 API 等指南', mimeType: 'text/markdown' },
    async (uri, variables) => {
      const topic = firstVariable(variables.topic)
      const guide = await repo.getGuide(topic)
      if (!guide) throw new Error(`guide not found: ${topic}`)
      return { contents: [{ uri: uri.href, text: guide.markdown, mimeType: 'text/markdown' }] }
    }
  )

  server.registerResource(
    'icons',
    'mineh5ui://icons',
    { title: '图标清单', description: '全部内置图标名称、中文标签与 unicode', mimeType: 'application/json' },
    async uri => text(uri, JSON.stringify({ library: `mine-h5-ui@${repo.libraryVersion}`, total: repo.getIcons().length, icons: repo.getIcons() }, null, 2))
  )
}
