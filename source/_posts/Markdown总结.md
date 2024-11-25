---
title: Markdown总结
description: 1
categories:
  - Markdown
tags:
  - Markdown
abbrlink: 10c144d1
date: 2024-11-19 17:56:46
---


## 标题

`# => h1`
`## => h2`
`### => h3`
`#### => h4`
`##### => h5`
`###### => h6`


## 段落

用空白行将一行或多行文本进行分隔


## 换行

`<br>`


## 文本

### 加粗

`**加粗**` ： **加粗**

### 斜体

`*斜体*` ： *斜体*

### 加粗并斜体

`***加粗并斜体***` ：***加粗并斜体***


## 引用

语法： `>`


- 如果只是两行，间隙小

```markdown
> 你好
> hello
```

> 你好
> hello

- 如果是两个段落，间隙大

```markdown
> 你好
>
> hello
```

> 你好
>
> hello


- 嵌套


```markdown
> 你好
>
>> hello
```

> 你好
>
>> hello


- 复杂


```markdown
> **注意**
>
> - 第一点
> - 第二点
>
> 1. 第一点
> 2. 第二点
```

> **注意**
>
> - 第一点
> - 第二点
>
> 1. 第一点
> 2. 第二点


## 列表

### 无序列表

```markdown
- 第一条
- 第二条
- 第三条
```

- 第一条
- 第二条
- 第三条


### 有序列表

```markdown
1. 第一条
2. 第二条
    内容
3. 第三条
```

1. 第一条
2. 第二条
    内容
3. 第三条


## 图片

格式：

`![图片alt](图片链接 "图片title")`

对应html：

`<img src="图片链接" alt="图片alt" title="图片title">`

例子：

`![背景图](https://cdn.jsdelivr.net/gh/ws-2024/blogimg/img/1339109.png "背景图")`

![背景图](https://cdn.jsdelivr.net/gh/ws-2024/blogimg/img/1339109.png "背景图")


## 代码块


### 行内

`` `内容` `` ： `内容`

### 块级


````
```指定编程语言
内容
```
````

## 分割线


`***`
`---`
`___`


## 链接

- 格式：

`[内容](url)`

- 例子：

`[百度](https://www.baidu.com/)`

[百度](https://www.baidu.com/)


- 引用链接

[百度][1]

[1]: https://www.baidu.com/


- 不带文本的链接

需要用 `<>` 包裹

例子：
```markdown
<https://www.baidu.com>
```

<https://www.baidu.com>


## 转义字符

- 语法：字符前加 `\`

- 可转义的字符：

    `\`

    `` ` ``
    `*`
    `_`
    `{}`
    `[]`
    `()`
    `#`
    `+`
    `-`
    `.`
    `!`
    `|`


## 表格

第一行是表头
第二行是分割线
后面是表格内容

```markdown
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

