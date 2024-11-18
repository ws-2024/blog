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


## 遇到问题

### 版权声明链接错误

#### 问题描述

文章内容尾部转载声明的链接错误，缺少二级目录，例如：
`https://ws2024.icu/posts/f4a89316.html`
应该为
`https://ws2024.icu/blog/posts/f4a89316.html`

#### 前提条件

由于我设置了主题配置文件的 `creative_commons` 配置项

```yml
creative_commons:
  license: by-nc-sa
  size: small
  sidebar: false
  post: true
  language:
```

所以在文章内容结尾会显示一个转载声明，包含这篇文章的链接

但是文章的链接是错误的


#### 解决问题

查找代码发现其模板位置在
`themes/next/layout/_partials/post/post-copyright.njk`

第 21 行

```markdown
{{ next_url(page.permalink, page.permalink, {title: page.title}, true) }}
```

> 之前我没把博客部署为子站的时候没有问题。后来部署为子站，我查看链接才发现问题
> 问题就出现在这个 `page.permalink` 上
> 部署子站后，`page.permalink` 变量并没有把子站的目录带上
> 查看 issue 发现似乎没人提过相关类似的问题

暂时找到一个折中的方法，修改 21 行的内容为：

```markdown
{{ next_url(config.url + config.root + page.path, config.url + config.root + page.path, {title: page.title}, true) }}
```

修改完之后链接可以正常显示

已经提了 [issue](https://github.com/next-theme/hexo-theme-next/issues/848)，后续再跟进吧！
