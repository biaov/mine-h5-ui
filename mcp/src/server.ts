import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { DataRepository } from './data/loader'
import { registerPrompts } from './prompts'
import { registerResources } from './resources'
import { registerTools } from './tools'
import { readPackageInfo } from './version'

export function createServer(repo: DataRepository): McpServer {
  const pkg = readPackageInfo()
  const server = new McpServer({ name: pkg.name, version: pkg.version })
  registerTools(server, repo)
  registerResources(server, repo)
  registerPrompts(server)
  return server
}
