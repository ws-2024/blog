---
title: 搭建Github图床
abbrlink: '24034750'
date: 2024-11-11 02:09:50
description: 1
categories:
  - 杂
tags:
  - Github
  - 图床
---


## Github方面


- 创建图床仓库
- 获取Token
    - Setting -> Developer settings -> Personal access tokens -> Tokens(classic)
        Generate new token -> Generate new token (classic)
    - 时间可以保留 90 天
    - 注意，token 生成之后只会显示一次，要及时复制


## PicGo

- [官网](https://molunerfinn.com/PicGo/)
- [Github](https://github.com/Molunerfinn/PicGo)
- [文档](https://picgo.github.io/PicGo-Doc/zh/guide/)

### 构建

> 因官方长时间未更新，故尝试用源码编译
> 基本上也都是参照官方的文档

- 克隆仓库

```shell
git clone https://github.com/Molunerfinn/PicGo.git
```

- 用 yarn 安装依赖（官方表示用 npm 安装，会有错误）

```shell
yarn install
```

> **注意：**
> 如果提示某个包的版本低，安装不成功，我的方法是把 `yarn.lock` 文件删除，重新安装

- 编译

```shell
npm run electron:build
```

> **报错提示：**
> `unwrapInjectedRef` 属性不存在
> 解决方案：
> 直接注释 `src/main.ts` 里面的相关代码：
> `// app.config.unwrapInjectedRef = true`
> 注意：两个双斜线要和注释的内容中间有一个空格，否则还会报错
> 构建成功后， `dist_electron` 目录里可以找到安装文件


### 安装

- 文件路径

`dist_electron/PicGo-Setup-2.4.0-beta.8.exe`

- 正常软件的安装流程


### 使用

- PicGo设置：时间戳重命名
- 图床：直接 Github，其它的可以设置不显示
    - 图床配置名：xxx（例如：博客图床）
    - 设定仓库名：xxx/xxx
    - 设定分支名：main（如果没指定的话就是main）
    - 设定Token：上面获取的Token
    - 设定存储路径：img/ （如果是这个的是话，就会在仓库根目录新建一个 img 文件夹）
    - 设定自定义域名：`https://cdn.jsdelivr.net/gh/用户名/仓库名`
- 把这个图床设置为默认图床
- 相册
    - 图床：Github
    - 选择自己想要的复制路径
- 上传区：选择Github图床
- 可以把图片下载到本地上传，也可以用图片url地址上传
- 上传完之后图片链接已经复制了，直接到浏览器里访问即可，速度不错

### 图片链接

- 例子： `https://cdn.jsdelivr.net/gh/ws-2024/blogimg/img/1339109.png`

### 待探索

- 如果我修改了上传到仓库里的图片的名字，那 jsdelivr 会自动更新吗

## 参考文章

- [利用GitHub搭建一个简易图床](https://munlelee.github.io/post/%E5%88%A9%E7%94%A8github%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%AE%80%E6%98%93%E5%9B%BE%E5%BA%8A/)
