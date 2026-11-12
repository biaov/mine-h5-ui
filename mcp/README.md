# mine-h5-ui-mcp

[![npm version](https://img.shields.io/npm/v/mine-h5-ui-mcp.svg?logo=npm)](https://www.npmjs.com/package/mine-h5-ui-mcp)

[mine-h5-ui](https://github.com/biaov/mine-h5-ui) 组件库的 MCP（Model Context Protocol）服务，为 Claude Code 等 AI 编码助手提供组件 API、示例、文档、图标与指南查询。

已发布到 npm，可直接通过 `npx` 使用，无需预先安装。

## 特性

- 查询组件的 Props、Events、Slots、Methods 与类型定义
- 获取官方代码示例，避免 AI 自行拼凑写法
- 支持中英文组件名与图标名检索
- 提供安装、主题、全局样式变量、组合式 API 等指南
- 只读、离线、不执行用户代码
- 数据随组件库版本构建并随包发布

## 环境要求

- Node.js `>= 24.x`

## 使用

```bash
claude mcp add mine-h5-ui -- npx -y mine-h5-ui-mcp
```

接入后在 Claude Code 中直接对话即可。

## 工具

| 工具                     | 参数                                         | 说明                                               |
| ------------------------ | -------------------------------------------- | -------------------------------------------------- |
| `list_components`        | `category?`、`kind?`                         | 列出组件与指南目录                                 |
| `search_components`      | `query`、`category?`、`limit?`               | 按中文名、英文名、标签、Props 或示例关键字检索组件 |
| `get_component_api`      | `component`、`include?`、`include_examples?` | 获取 Props、Events、Slots、Methods 与类型定义      |
| `get_component_examples` | `component`、`scenario?`、`limit?`           | 获取官方示例，可按场景过滤                         |
| `get_component_doc`      | `component`、`section?`                      | 获取原始 Markdown 文档或指定章节                   |
| `search_icons`           | `query?`、`limit?`、`offset?`                | 检索内置图标，返回 `icon-xxx` 名称与用法           |
| `get_guide`              | `topic`                                      | 获取安装、主题、API、组合式 API 等指南             |

`component` 参数支持多种写法：`MeButton`、`me-button`、`button`、`按钮`。

## 资源

| URI                              | 说明               |
| -------------------------------- | ------------------ |
| `mineh5ui://index`               | 组件与指南总览     |
| `mineh5ui://components/{id}`     | 组件元数据         |
| `mineh5ui://components/{id}/doc` | 组件 Markdown 文档 |
| `mineh5ui://guides/{topic}`      | 指南文档           |
| `mineh5ui://icons`               | 全量图标清单       |

## 提示词

| 提示词          | 说明                                       |
| --------------- | ------------------------------------------ |
| `generate-page` | 按需求检索组件并生成可运行的 Vue 3 H5 页面 |
| `use-component` | 获取某个组件的真实 API 并生成最小用法      |

## 使用示例

接入后直接使用自然语言即可：

- “mine-h5-ui 有哪些表单组件？”
- “MeButton 支持哪些 type？”
- “用 mine-h5-ui 写一个登录页”
- “找一个关闭图标”
- “MeForm 的校验示例是什么？”

AI 会按需调用检索、API、示例与指南工具，再基于真实数据生成代码。

## 数据与版本

- 数据在构建期从组件源码与文档生成，随包发布为 `dist/generated/*.json`。
- 服务运行时不依赖 `mine-h5-ui`，但业务项目运行生成的代码仍需安装 `mine-h5-ui`。
- 建议 MCP 包与组件库保持同一版本线；组件库升级后重新发布或重新构建 MCP 包。

## 开发与发布

```bash
npm install
npm run typecheck
npm run check
npm run build
```

维护者发布前同步版本：

```bash
npm run sync-version
npm publish
```

GitHub Actions 工作流在 push 时执行校验与发布；当 `publishConfig.provenance` 为 `true` 时，会通过 OIDC 自动生成 npm provenance。

当前 npm dist-tags 可通过以下命令查看：

```bash
npm view mine-h5-ui-mcp dist-tags
```

## 常见问题

### 业务项目需要安装 mine-h5-ui 吗？

需要。MCP 只提供查询能力，不包含组件代码与样式。业务项目仍需执行 `npm i mine-h5-ui`。

### 找不到组件或图标？

先调用 `search_components` 或 `search_icons`。如果仍然缺失，可能是 MCP 数据版本落后，请升级 `mine-h5-ui-mcp` 或重新构建本地数据。

### 为什么 API 和项目里的组件行为不一致？

请确认 MCP 包版本与业务项目使用的 `mine-h5-ui` 版本一致。

## License

[MIT](./LICENSE)
