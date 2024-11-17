---
title: 备份hexo源码到Github
description: 1
categories:
  - hexo笔记
tags:
  - Hexo
  - GitHub
abbrlink: 25e00ef8
date: 2024-11-17 19:39:01
---



> 接[上文](https://ws2024.icu/blog/posts/f4a89316.html)，子仓库部署完毕
> 这次把源码也部署上去


## 创建分支


- 在 `blog` 仓库创建 `source` 分支，并设置为默认分支
    - 第一次 source 仓库什么都没有，只有一个 README.md 文件



## 克隆仓库

- 执行命令

```shell
git clone https://github.com/yourname/blog.git
cd blog
```



## 推送

- 把源代码复制到 blog 文件夹
- 执行命令

```shell
#清缓存
hexo c

#添加
git add .

#提交
git commit -m 'add source code' #第一次
git commit -m 'blog update' #第二次及以后

#推送到远程仓库
git push
```



## 不同终端更新文章



### 克隆

```shell
git clone https://github.com/yourname/blog.git
```



### 安装依赖

- 执行命令

```shell
npm i
```

- 报错

> 如果出现报错，大概率是依赖版本不兼容

- 解决

    - 先删除 `node_modules` 文件夹，并且删除 `package.lock.json` 文件

    - 删除 `package.json` 中的报错解决方法（如果有）

        ```json
        {
            "overrides": {
                "got": "^14.4.4",
                "semver-regex": "^4.0.5",
                "trim-newlines": "^5.0.0",
                "highlight.js": "^11.10.0"
            }
        }
        ```

    - 再次执行安装命令



### 报错解决

- 上面安装完之后，还会出现一堆报错（不是致命的），但是可以顺利安装了
- 这次再把上面的解决方法加上

- 加上之后运行命令

```shell
npm audit fix
```

> 结果：
>
> added 12 packages, removed 23 packages, changed 15 packages, and audited 598 packages in 13s
>
> 77 packages are looking for funding
>   run `npm fund` for details
>
> found 0 vulnerabilities

- 再看一下

```shell
npm audit
```

> 结果：
>
> found 0 vulnerabilities

- 后面就可以正常更新文章了



## Git 相关命令

- 命令

```shell
#如果其它设备更新文章了，可以先拉取
git pull

#清缓存
hexo c

#添加文章
npx hexo new "ArticleName"

#更新推送
git add .
git commit -m 'blog update'
git push
```

## 参考文章

- [文章1](https://www.yangbing.fun/2019/06/29/save-hexo-source-post-with-git-branch/)
- [文章2](https://blog.csdn.net/u011642663/article/details/70182774)

