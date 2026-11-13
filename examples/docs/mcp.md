# MCP 支持

---

`mine-h5-ui` 提供配套的 MCP（Model Context Protocol）服务 `mine-h5-ui-mcp`，让 Claude Code 等 AI 编码助手能够准确查询组件 API、官方示例、图标与指南，减少编造 Props、枚举值和图标名的问题。

服务已发布到 npm，可直接通过 `npx` 使用，无需预先安装。需要 Node.js `>= 24.x`，服务只读、离线、不执行用户代码。

## 使用

::: CopyCode

```sh
claude mcp add mine-h5-ui -- npx -y mine-h5-ui-mcp
```

:::

接入后在 Claude Code 中直接对话即可，不需要额外配置。

## 可用工具

| 工具                     | 参数                                         | 说明                                               |
| ------------------------ | -------------------------------------------- | -------------------------------------------------- |
| `list_components`        | `category?`、`kind?`                         | 列出组件与指南目录，可按分类或类型过滤             |
| `search_components`      | `query`、`category?`、`limit?`（默认 8）     | 按中文名、英文名、标签、Props 或示例关键字检索组件 |
| `get_component_api`      | `component`、`include?`、`include_examples?` | 获取 Props、Events、Slots、Methods 与类型定义      |
| `get_component_examples` | `component`、`scenario?`、`limit?`（默认 3） | 获取官方代码示例，可按场景过滤                     |
| `get_component_doc`      | `component`、`section?`                      | 获取原始 Markdown 文档，或其中某个章节             |
| `search_icons`           | `query?`、`limit?`（默认 20）、`offset?`     | 检索内置图标，返回可直接使用的 `icon-xxx` 名称     |
| `get_guide`              | `topic`                                      | 获取安装、主题、API、组合式 API 等指南             |

`component` 支持 `MeButton`、`me-button`、`button`、`按钮` 等写法；`get_component_api` 的 `include` 可取 `props`、`events`、`slots`、`methods`、`types`。

## 可用资源

| 资源                             | 说明                               |
| -------------------------------- | ---------------------------------- |
| `mineh5ui://index`               | 组件分类、指南目录、图标数量与版本 |
| `mineh5ui://components/{id}`     | 单个组件的 API、示例与导入方式     |
| `mineh5ui://components/{id}/doc` | 组件原始 Markdown 文档             |
| `mineh5ui://guides/{topic}`      | 指南文档                           |
| `mineh5ui://icons`               | 全量图标清单                       |

## 提示词

| 提示词          | 说明                                       |
| --------------- | ------------------------------------------ |
| `generate-page` | 按需求检索组件并生成可运行的 Vue 3 H5 页面 |
| `use-component` | 获取某个组件的真实 API 并生成最小用法      |

## 使用示例

接入后直接使用自然语言即可，不需要记工具名：

- “mine-h5-ui 有哪些表单组件？”
- “MeButton 支持哪些 type？”
- “用 mine-h5-ui 写一个登录页”
- “找一个关闭图标”
- “MeForm 的校验示例是什么？”

AI 会按需调用 `search_components`、`get_component_api`、`get_component_examples` 等工具，再基于真实 API 生成代码。

## 数据与版本

- MCP 数据在构建期从组件源码与 `examples/docs` 生成，随包发布为 `dist/generated/*.json`。
- MCP 服务运行时不依赖 `mine-h5-ui`，但**业务项目要运行生成的代码，仍需安装 `mine-h5-ui`**。
- 建议 MCP 包与组件库保持同一版本线，例如都用 `2.19.x`。组件库升级后，重新发布或重新构建 MCP 包即可。

## 常见问题

### 业务项目需要安装 mine-h5-ui 吗？

需要。MCP 只提供查询能力，不包含组件代码与样式。业务项目仍需执行：

::: CopyCode

```sh
npm i mine-h5-ui
```

:::

### 找不到组件或图标？

先调用 `search_components` 或 `search_icons`。如果仍然缺失，可能是 MCP 数据版本落后，请升级 `mine-h5-ui-mcp` 或重新构建本地数据。

### 为什么 AI 返回的 API 和文档不一致？

MCP 数据来自当前发布版本的源码与文档。请确认 MCP 包版本与业务项目使用的 `mine-h5-ui` 版本一致。

## 相关链接

- [GitHub 仓库](https://github.com/biaov/mine-h5-ui)
- [MCP 包源码](https://github.com/biaov/mine-h5-ui/tree/main/mcp)
- [npm 包地址](https://www.npmjs.com/package/mine-h5-ui-mcp)
