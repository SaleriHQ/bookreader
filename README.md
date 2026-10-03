# BookReader

这是我的书籍存储。

## 书籍目录与文件格式

每本书放在 `books/` 下的独立目录中。目录名作为书籍 ID，用于生成书籍和图片的访问路径；建议使用小写英文、数字和连字符，避免空格。

```text
books/
└── <book-id>/
    ├── book.yaml       # 书籍信息
    ├── cover.jpg       # 封面（格式可为 jpg、png、webp 等）
    ├── chapters/       # 章节 Markdown
    │   ├── 01-....md
    │   └── 02-....md
    └── assets/         # 书内插图及其他图片资源
```

### 书籍信息：`book.yaml`

每本书必须有 `book.yaml`，使用 YAML 格式：

```yaml
title: "书名"                 # 必填
subtitle: "副标题"            # 可选
author: "作者"                # 可选
cover: ./cover.jpg            # 必填，封面图片路径
```

`cover` 是相对于 `book.yaml` 所在目录的图片路径。封面文件应放在书籍目录中，文件名和扩展名须与配置一致。`title`、`subtitle`、`author` 使用字符串。

### 章节文件

章节 Markdown 文件放在 `chapters/` 中。每个文件开头必须有 YAML frontmatter，至少包含标题和正整数顺序：

```markdown
---
title: "第一章：标题"
order: 1
---

## 第一章：标题

章节正文……
```

- `title`：必填字符串，用作章节标题。
- `order`：必填正整数，用于章节排序；文件名不决定阅读顺序。
- 文件扩展名使用 `.md`。文件名建议带有便于识别的序号和标题，例如 `01-first-chapter.md`。
- 正文使用标准 Markdown；可使用标题、段落、列表、引用、表格、行内代码和代码块等常见语法。
- 数学内容可使用 `$...$` 行内公式和 `$$...$$` 独立公式。

### 图片资源

书内图片统一放在本书的 `assets/` 目录。Markdown 图片可用相对路径：

```markdown
![图片说明](assets/illustration.jpg)
```

也兼容从章节文件所在目录解析的相对写法，以及项目中的绝对路径写法：

```markdown
![图片说明](../assets/illustration.jpg)
![图片说明](/books/<book-id>/assets/illustration.jpg)
```

还支持简写 `![[illustration.jpg]]`；可选别名用于指定替代文本，纯数字或 `宽x高` 别名会设置显示宽度：

```markdown
![[illustration.jpg|古埃及插图]]
![[illustration.jpg|320]]
![[illustration.jpg|320x200]]
```

新增图片引用时，确认目标文件确实存在于对应书籍的 `assets/` 中，并确保文件名大小写一致。

### 维护约定

- 一本文档对应一个 `books/<book-id>/` 目录；`book.yaml`、`chapters/` 和 `assets/` 都应位于该目录内。
- 章节的 `order` 应唯一并按阅读顺序递增，避免重号或缺少 frontmatter。
- 书籍正文 Markdown 放在 `chapters/`，不要在书籍目录其他位置添加 Markdown 文件；内容集合会扫描 `books/` 下的 Markdown 文件，而章节路由依赖 `chapters/` 路径。
- 将封面和章节插图与书籍内容一起存放，引用使用相对于书籍目录清晰可维护的路径。
