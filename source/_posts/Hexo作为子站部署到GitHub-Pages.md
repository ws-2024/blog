---
title: Hexo作为子站部署到GitHub Pages
description: 1
categories:
  - hexo笔记
tags:
  - Hexo
  - GitHub Pages
abbrlink: f4a89316
date: 2024-11-17 18:27:06
---



> 原来的站点都是在 Github Pages 仓库部署，这次把 hexo 部署到子站
> 推荐的方法：建立分支仓库


## 仓库存在形式


### 主站仓库

- 名称为 `<你的用户名>.github.io` ，这是 GitHub Pages 的特殊仓库。
- 部署主站内容到该仓库的 `main` 或 `gh-pages` 分支，访问地址为 `https://你的用户名.github.io/`。

### 子站仓库

- 为每个子站创建一个单独的仓库，例如 `blog` 、 `portfolio` 等。
- 每个子仓库中建立 `gh-pages` 分支作为 GitHub Pages 的部署源。
- 子站的访问地址，例如：
  - `https://你的用户名.github.io/blog/`
  - `https://你的用户名.github.io/portfolio/`
  - ...


## 创建仓库


### 创建主仓库

- 这个可以部署一个引导页（随意发挥）

`<你的用户名>.github.io`

### 创建分支仓库

- 创建仓库 `blog`

- 在该仓库在创建 `gh-pages` 分支，用作博客的 Github Pages 代码部署


## 配置 hexo

- 项目配置文件

```yml
# 设置子路径
root: /blog/

# 部署配置
deploy:
  type: git
  repo: https://github.com/你的用户名/blog.git
  branch: gh-pages
```


## 推送项目

### 安装插件

```shell
npm install hexo-deployer-git --save
```

### 部署

```shell
hexo clean
hexo generate
hexo deploy
```


## 访问

- 部署完成后，子站将通过 `https://你的用户名.github.io/blog/` 访问


## 优点

- 每个子站一个仓库，部署简单且互相独立。

