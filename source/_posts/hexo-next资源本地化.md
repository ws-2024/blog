---
title: hexo next资源本地化
description: 1
categories:
  - hexo笔记
tags:
  - hexo
abbrlink: 2ce47b18
date: 2024-11-25 20:14:02
---


> next主题默认开启cdn，导致不联网的情况下无法愉快的写文章
> 如果要停用cdn，需要单独下载CDN对应的静态资源

## 安装

- 命令

```shell
npm install @next-theme/plugins
```

- 报错解决

```json
"overrides": {
    "got": "^14.4.4",
    "semver-regex": "^4.0.5",
    "trim-newlines": "^5.0.0",
    "highlight.js": "^11.10.0",
    "cross-spawn": "^7.0.6",
    "katex": "^0.16.11",
    "node-fetch": "^3.3.2",
    "axios": "^1.7.7"
}
```


## 主题配置文件

```yml
vendors:
  # The CDN provider of NexT internal scripts.
  # Available values: local | jsdelivr | unpkg | cdnjs | custom
  # Warning: If you are using the latest master branch of NexT, please set `internal: local`
  internal: local
  # The default CDN provider of third-party plugins.
  # Available values: local | jsdelivr | unpkg | cdnjs | custom
  # Dependencies for `plugins: local`: https://github.com/next-theme/plugins
  plugins: local #默认是 cdnjs，改成 local，前提安装上面的插件
  # Custom CDN URL
  # For example:
  # custom_cdn_url: https://cdn.jsdelivr.net/npm/${npm_name}@${version}/${minified}
  # custom_cdn_url: https://cdnjs.cloudflare.com/ajax/libs/${cdnjs_name}/${version}/${cdnjs_file}
  custom_cdn_url:
```


**这样就可以本地和线上分开了！**

