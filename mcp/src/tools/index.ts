import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from '../data/loader'
import { registerGetComponentApi } from './getComponentApi'
import { registerGetComponentDoc } from './getComponentDoc'
import { registerGetComponentExamples } from './getComponentExamples'
import { registerGetGuide } from './getGuide'
import { registerListComponents } from './listComponents'
import { registerSearchComponents } from './searchComponents'
import { registerSearchIcons } from './searchIcons'

export function registerTools(server: McpServer, repo: DataRepository): void {
  registerListComponents(server, repo)
  registerSearchComponents(server, repo)
  registerGetComponentApi(server, repo)
  registerGetComponentExamples(server, repo)
  registerGetComponentDoc(server, repo)
  registerSearchIcons(server, repo)
  registerGetGuide(server, repo)
}
