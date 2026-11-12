#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { DataRepository } from './data/loader'
import { createServer } from './server'
import { readPackageInfo } from './version'

async function main(): Promise<void> {
  const repo = await DataRepository.open()
  const server = createServer(repo)
  const transport = new StdioServerTransport()
  await server.connect(transport)
  const pkg = readPackageInfo()
  console.error(`[mine-h5-ui-mcp] v${pkg.version} (data: mine-h5-ui@${repo.libraryVersion})`)
}

main().catch(error => {
  console.error('[mine-h5-ui-mcp] fatal:', error)
  process.exit(1)
})
