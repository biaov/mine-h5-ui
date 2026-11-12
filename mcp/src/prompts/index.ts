import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

const PAGE_PROMPT = `你正在使用 mine-h5-ui（Vue 3 H5 组件库）编写页面。

必须按以下顺序使用工具：
1. 调用 search_components 选择组件，不要凭记忆猜测组件名。
2. 对每个要使用的组件调用 get_component_api，确认 Props、Events、Slots 与默认值。
3. 需要示例时调用 get_component_examples，优先复用官方写法。
4. 需要图标时调用 search_icons，只能使用返回的 name。
5. 首次生成页面时调用 get_guide('start') 确认引入方式。

输出要求：
- 输出单个可运行的 Vue 单文件组件，包含 <script setup lang="ts">、<template> 与 <style scoped>。
- 只能使用工具返回的 Props、事件、插槽与图标名，禁止编造。
- 给出版本对应的组件引入语句与样式引入语句。
- 不要省略任何必要的样式引入。

用户需求：`

const COMPONENT_PROMPT = `你要展示 mine-h5-ui 组件的最小可运行用法。

步骤：
1. 调用 get_component_api 获取组件 API。
2. 调用 get_component_examples 获取官方示例。
3. 基于真实 API 生成最小示例，并附上组件与样式引入语句。

组件：`

export function registerPrompts(server: McpServer): void {
  server.registerPrompt(
    'generate-page',
    {
      title: '生成 mine-h5-ui 页面',
      description: '按需求检索组件并生成可运行的 Vue 3 H5 页面',
      argsSchema: {
        requirement: z.string().describe('页面需求，例如 登录页、商品列表、个人中心'),
        style: z.string().optional().describe('可选的视觉风格或布局要求')
      }
    },
    ({ requirement, style }) => ({
      messages: [
        {
          role: 'user',
          content: { type: 'text', text: `${PAGE_PROMPT}${requirement}\n${style ? `视觉要求：${style}\n` : ''}` }
        }
      ]
    })
  )

  server.registerPrompt(
    'use-component',
    {
      title: '展示组件用法',
      description: '获取某个 mine-h5-ui 组件的真实 API 并生成最小用法',
      argsSchema: {
        component: z.string().describe('组件名，例如 MeButton'),
        requirement: z.string().optional().describe('可选的使用场景')
      }
    },
    ({ component, requirement }) => ({
      messages: [
        {
          role: 'user',
          content: { type: 'text', text: `${COMPONENT_PROMPT}${component}\n${requirement ? `使用场景：${requirement}\n` : ''}` }
        }
      ]
    })
  )
}
