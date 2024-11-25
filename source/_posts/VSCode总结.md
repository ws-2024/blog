---
title: VSCode总结
description: 1
categories:
  - 软件
tags:
  - VSCode
  - 编辑器
abbrlink: 4ba54f4d
date: 2024-11-19 17:54:41
---



## 安装


- [官网](https://code.visualstudio.com/)


## 扩展


- `chinese` ：中文语言
- `live server` ：小型开发服务器
- `Material Icon` ：文件和文件夹图标
- `Chinese Lorem` ：假文生成
- `Remove empty lines` ：去除空行，需要自己绑定快捷键，设置->键盘快捷方式->点击右上角第二排第一个按钮【打开键盘快捷方式】->输入：

```json
    {
        "key": "ctrl+shift+9",
        "command": "remove-empty-lines.inDocument",
        "args": 0
    },
    {
        "key": "ctrl+shift+9",
        "command": "remove-empty-lines.inSelection",
        "when": "editorHasSelection",
        "args": 0
    },
    {
        "key": "ctrl+shift+8",
        "command": "remove-empty-lines.inDocument",
        "args": 1
    },
    {
        "key": "ctrl+shift+8",
        "command": "remove-empty-lines.inSelection",
        "when": "editorHasSelection",
        "args": 1
    }
```

- `file-tree-generator` ：展示项目目录的结构


## 快捷键


- `ctrl + b` ： 折叠菜单
- `alt + shift + f` ：格式化代码
- `ctrl + d` ：一个一个选中相同内容，可以按多次，从当前选中的开始，按一下就选中后面的一个（之前的不能选中，只能选后面的，如果选中了最后一个，就从上面没选中的开始选中）
- `ctrl + shift + L` 或者 `ctrl+f2` ：一次选中所有的已经选中的相同内容
- `` ctrl + ` `` ：调出集成终端
- `ctrl + shift + enter` ：从当前行上方另起一行
- `alt + 鼠标左键` ：增加光标位置
- `shift + alt + i` ：当选中多行或者全选文本的时候，按下这个快捷键会在选中的行每一行都生成一个光标
    - 如何查看这个快捷键：文件 > 首选项 > 键盘快捷方式，搜索 `editor.action.insertCursorAtEndOfEachLineSelected`
- 折叠代码
    - `ctrl + k + 0` ：折叠所有代码块
    - `ctrl + k + j` ：展开所有代码块

## 其它


- 字号：`17`
- 英文的假文（自带）：输入 `lorem+数字` ，就是随机几个单词，注意是单词（这里的标点符号不占位）
- 目录缩进距离：在设置里搜索 `Tree: Indent` ，设置 `20`
- 取消合并空目录：如果一个目录下只有一个空目录，会合并显示（这个是我不能容忍的，取消，合并单个目录结构： 设置 => `Compact Folders` 去掉前面的√）
- 颜色主题：深色+
- 自动去除多余的行尾空格：设置 => `Files: Trim Trailing Whitespace` 勾选
- 设置终端字体大小：设置 => 地址栏输入 `terminal.integrated.fontSize`
- 默认 vscode 会隐藏 `.git` 文件夹
- 设置 4 个空格缩进
    - 常用设置：tabe-size 设置为 4
    - `Detect Indentation` 选项取消勾选（如果勾选，vscode会按原来的缩进处理）

