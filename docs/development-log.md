# 开发日志

## 2026-10-01：书架与 Thomas' Calculus 阅读器

### 本轮目标

- 将首页改造成按封面和书名展示藏书的书架。
- 为每本书提供独立阅读器：左侧可收起章节栏，右侧显示随正文滚动的大纲和阅读进度。
- 将书籍元数据、章节和图片统一放在各自的书籍目录中。
- 兼容 Thomas' Calculus 原始 Markdown 中的数学公式和 Obsidian 图片语法。

### 已完成

- 建立 `books/<book-id>/` 目录约定：
  - `book.yaml`：书名、可选副标题、可选作者和封面。
  - `chapters/*.md`：章节正文。
  - `assets/`：书内图片资源。
- 新增 Astro Content Collections：
  - `books` 集合负责书籍元数据。
  - `chapters` 集合只要求 `title` 和 `order`，不要求 `description`。
- 为 Thomas' Calculus 的 17 个章节补充 frontmatter，并根据 `order` 排序。
- 实现书架首页，自动读取书籍封面、名称、作者和章节数量。
- 实现动态章节路由以及阅读器布局：
  - 桌面端可折叠章节侧栏。
  - 移动端抽屉式章节导航。
  - 右侧章节大纲、当前标题高亮和阅读进度条。
  - 上一章、下一章导航。
- 配置 Markdown 渲染管线，支持 GFM、数学公式、自定义指令、标题锚点和原始 HTML。
- 修正第 8、12、15 章中导致 MathJax 中断的异常公式。
- 将 Thomas' Calculus 的 2,517 个图片文件归档至 `books/thomas-calculus/assets/`。
- 新增 Obsidian 图片引用转换，支持：
  - `![[image.jpg]]`
  - `![[image.jpg|替代文字]]`
  - `![[image.jpg|400]]`
  - `![[image.jpg|400x300]]`
- 新增按书籍生成的静态图片路由 `/books/<book-id>/assets/<asset>`，避免图片进入 Astro 的 Sharp 优化流程。
- 移除 Astro 初始欢迎页及其不再使用的资源。

### 技术决策

- 章节正文不设置 `description` 字段。当前书架和阅读器不消费章节摘要，强制维护该字段只会增加内容迁移成本；以后需要搜索结果摘要或章节预览时再作为可选字段加入。
- 图片保留在书籍目录内，而不是放进全局 `public/`。这样复制或删除一本书时，元数据、章节、封面和正文图片可以作为一个完整单元处理。
- 保留原始 Obsidian 语法，通过 Remark 插件在构建期转换，不批量重写 17 个章节文件。

### 验证结果

- `pnpm astro sync --force`：通过。
- `pnpm build`：通过。
- 17 个 Thomas' Calculus 章节均成功生成。
- 2,517 个书内图片资源均成功生成。
- 构建后的章节 HTML 中原始 `![[...]]` 引用数量为 0。
- 抽样比较源图片和构建产物的 SHA-256，内容一致。
