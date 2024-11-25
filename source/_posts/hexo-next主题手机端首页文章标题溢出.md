---
title: hexo next主题手机端首页文章标题溢出
description: 1
categories:
  - hexo笔记
tags:
  - hexo
abbrlink: d1ae5d0d
date: 2024-11-25 18:38:38
---


## 设备

> 移动端

## 条件

- 如果首页文章标题出现了较长的不可断开的字符串，那该标题的长度将溢出


## 查找

移动端首页文章标题给了样式 `overflow-wrap: break-word;` 使不能断开的字符串强制换行，是可以的。但里面还包裹了一个 a 标签，设置了 `display: inline-block;`，但是没给最大宽度，这样就可能导致标题溢出。

所以，在 `themes/next/source/css/_common/components/post/post-header.styl`

37 行后另起一行，加上如下代码即可：

`max-width: 100%;`
