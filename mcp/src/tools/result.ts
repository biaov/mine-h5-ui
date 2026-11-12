import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'

export function jsonResult(payload: unknown): CallToolResult {
  return { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] }
}

export function errorResult(code: string, message: string, extra: Record<string, unknown> = {}): CallToolResult {
  return {
    isError: true,
    content: [{ type: 'text', text: JSON.stringify({ code, message, ...extra }, null, 2) }]
  }
}
