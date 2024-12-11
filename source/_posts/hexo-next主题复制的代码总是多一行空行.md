---
title: hexo next主题复制的代码总是多一行空行
description: 1
categories:
  - hexo笔记
tags:
  - hexo
abbrlink: ce03dde7
date: 2024-11-25 19:07:59
---


## 解决

编辑文件 `themes/next/source/js/utils.js` 第 49 行替换为


`code = lines.innerText.trim();`

