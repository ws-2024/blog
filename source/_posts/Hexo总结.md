---
title: Hexo总结
description: 1
categories:
  - hexo笔记
tags:
  - hexo
abbrlink: 34aafde
date: 2024-10-31 16:09:33
---



> - [Hexo 官网](https://hexo.io/zh-cn/)
> - [Hexo 文档](https://hexo.io/zh-cn/docs/)
> - [Hexo Github](https://github.com/hexojs/hexo)


## 安装


### 局部安装（npx）

```bash
npm install hexo
```

> 报错：这个报错暂时没解决，不过不影响
>
> $ npm install hexo
> npm warn deprecated cuid@2.1.8: Cuid and other k-sortable and non-cryptographic ids (Ulid, ObjectId, KSUID, all UUIDs) are all insecure. Use @paralleldrive/cuid2 instead.
>
>
> <https://www.npmjs.com/package/@paralleldrive/cuid2>
>
> <https://github.com/paralleldrive/cuid2>


### 创建博客

```bash
npx hexo init blog
```


### 进入博客目录

```bash
cd blog
```


### 删除 yarn.lock 文件

如果不删除，vscode有提醒，后面都用 npm 安装


### 删除 .git 或 .github 文件夹


### 安装npm包

```shell
npm install
```

> 新建完成后，指定文件夹目录下有：
> node_modules: 依赖包目录
> public: 编译后的目录
> scaffolds：生成文章的一些模板
> source：用来存放你的文章
> themes：主题目录
> _config.yml: 项目配置文件

### 开启服务器

```bash
npx hexo server
```

> 测试环境 `http://localhost:4000/` 查看
>
> 这个刚开始会有一个提示：没找到 favicon 网站图标图片
>
> 这个安装新主题之后就好了


### 生成静态文件

```bash
npx hexo generate
```

> 根目录下 `public` 文件夹里的内容就是最终要部署的代码


## 个性化设置 （初级）


### 更换主题

- 安装 [NexT](https://github.com/next-theme/hexo-theme-next) 主题：

```shell
git clone https://github.com/next-theme/hexo-theme-next themes/next
```

> **注意：**
> 1. NexT 主题有两个分支【[老仓库](https://github.com/theme-next/hexo-theme-next) [新仓库](https://github.com/next-theme/hexo-theme-next)】，强烈建议安装新仓库
> 2. 老仓库更新在 N 年前，新仓库一直在更新
> 3. [为什么会创建新仓库](https://github.com/next-theme/hexo-theme-next/issues/4#issuecomment-626205848)

- 删除主题目录下 .git 或 .github 文件夹

- **配置文件划分**
    - 项目配置文件: 项目根目录下的 `_config.yml`
    - 主题配置文件: `themes/next/_config.yml`

- 改主题，项目配置文件， `theme` 配置项:

```yml
theme: next
```

- 选择外观：主题配置文件， `scheme` 配置项：

```yml
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini #注意：这个可以一直显示左侧菜单，但是底部的显示样式有问题
```


### 站点配置

* 项目配置文件，`Site` 配置项（注意冒号后面要有空格）

```yml
# Site
title: Wong's Blog              #博客名称
subtitle: ''                    #博客副标题
description: ''                 #描述
keywords:                       #关键字
author: Charles Wong            #作者
language: zh-CN                 #网站语言
timezone: 'Asia/Shanghai'       #时区
```


## 完善博客页面


### 添加菜单

* 主题配置文件，将 `menu` 配置项中需要添加的菜单前面的注释去掉即可（如需要添加其他菜单可按需添加，注意缩进）：

```yml
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
  #schedule: /schedule/ || fa fa-calendar
  #sitemap: /sitemap.xml || fa fa-sitemap
  #commonweal: /404/ || fa fa-heartbeat
```


### 创建“分类”页面

* 新建页面，命名为 categories：

```shell
npx hexo new page categories
```

* 编辑刚新建的页面 `/source/categories/index.md` ，将页面的类型设置为 `categories` ，主题将自动为这个页面显示所有分类（注意保留冒号后的空格）。

```yml
---
title: 分类
date: 2024-10-30 23:37:56
type: "categories"
comments: false
---
```


### 创建“标签云”页面

* 新建页面，命名为 tags:

```shell
npx hexo new page "tags"
```

* 编辑刚新建的页面，将页面的类型设置为 `tags` ，主题将自动为这个页面显示标签云。

```yml
---
title: 标签
date: 2024-10-30 23:40:07
type: "tags"
comments: false
---
```


### 创建“关于我”页面

* 新建 about 页面：

```shell
npx hexo new page "about"
```

* 编辑刚新建的页面，可在正文处用 Markdown 格式写下信息。

```yml
---
title: 关于博主
date: 2024-10-31 00:42:57
comments: false
---
```


## 设置侧边栏社交链接

* 项目配置文件， `social` 配置项，添加社交站点名称与地址即可。键值格式为 `显示名称: 链接地址` ，例如：

```yml
# Social Links
# ...
social:
  GitHub: https://github.com/ws-2024 || fab fa-github
  #E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  #Twitter: https://twitter.com/yourname || fab fa-twitter
  #FB Page: https://www.facebook.com/yourname || fab fa-facebook
  #StackOverflow: https://stackoverflow.com/yourname || fab fa-stack-overflow
  #YouTube: https://youtube.com/yourname || fab fa-youtube
  #Instagram: https://instagram.com/yourname || fab fa-instagram
  #Skype: skype:yourname?call|chat || fab fa-skype
```


## 创建文章

- 执行如下命令，会在 `source/_posts` 文件夹内生成一个 `.md` 格式文件。

```bash
npx hexo new "文章名称"
```

* 编辑该文件，修改起始配置项为：

```markdown
title 文章的标题
date 创建日期 （文件的创建日期 ）
updated 修改日期 （ 文件的修改日期）
comments 是否开启评论 true
tags 标签
categories 分类
permalink url中的名字（文件名）
```

* 编写正文内容（遵循 Markdown 规则）


## 删除文章

- 具体方法如下：

    1. 首先进入到 `source/_post` 文件夹中
    2. 找到相应文件，删除即可


## 添加分类及标签

> [参考文章](https://linlif.github.io/2017/05/27/Hexo%E4%BD%BF%E7%94%A8%E6%94%BB%E7%95%A5-%E6%B7%BB%E5%8A%A0%E5%88%86%E7%B1%BB%E5%8F%8A%E6%A0%87%E7%AD%BE/)

- 文章添加分类

```yml
---
title: jQuery对表单的操作及更多应用
date: 2017-05-26 12:12:57
categories:
- web前端
---
```

- 文章添加标签

```yml
---
title: jQuery对表单的操作及更多应用
date: 2017-05-26 12:12:57
categories:
- web前端
tags:
- jQuery
- 表格
- 表单验证
---
```

> 标签和分类不是单独定义的，是在文章里定义的。


## 个性化设置 （高级）


### 设置侧边栏头像

* 根目录下 `source` 文件夹下新建文件夹，命名为 `uploads` , 将头像图片（如： avatar.jpg ）放到该文件夹内

* 打开 `themes/next/_config.yml` ，找到 `avatar` 配置项并修改:

```yml
avatar:
    url: /uploads/avatar.jpg #图片地址
    rounded: true #是否圆形
    rotated: true #鼠标移上去是否转动
```


### 修改代码块样式

* 主题配置文件， `codeblock` 配置项：

```yml
codeblock:
  # Code Highlight theme
  # All available themes: https://theme-next.js.org/highlight/
  theme:
    light: stackoverflow-dark
    dark: stackoverflow-dark
  prism:
    light: prism
    dark: prism-dark
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Available values: default | flat | mac
    style: mac
  # Fold code block
  fold:
    enable: true
    height: 500
```


### 设定站点建立时间

* 项目配置文件，新增 `since` 配置项：

```yml
since: 2024
```


### 改进文章链接样式

* 编辑文件 `themes/next/source/css/_common/components/post/post.styl`，在末尾添加如下 css 样式：

```stylus
//link style
.post-body p a,
.post-body blockquote a,
.post-body li a
{
  color: #0593d3 !important;
  border-bottom: none;
  border-bottom: 1px solid #0593d3 !important;
  &:hover {
    color: #fc6423 !important;
    border-bottom: none;
    border-bottom: 1px solid #fc6423 !important;
  }
}
```


### 给博客增加背景图

* 主题配置文件， `custom_file_path` 配置项（设置自定义样式文件的路径，原理是利用自定义样式文件中的样式覆盖掉默认样式）：

> [参考文章](https://www.lvxuefei.top/%E5%88%A9%E7%94%A8Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E2%80%94%E2%80%94%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F/)

```yml
custom_file_path:
  #head: source/_data/head.swig
  #header: source/_data/header.swig
  #sidebar: source/_data/sidebar.swig
  #postMeta: source/_data/post-meta.swig
  #postBodyEnd: source/_data/post-body-end.swig
  #footer: source/_data/footer.swig
  #bodyEnd: source/_data/body-end.swig
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  style: source/_data/styles.styl
```

* 根目录 `source` 文件夹下创建 `_data` 文件夹，新建 `styles.styl` 文件，打开新建的文件 `source/_data/styles.styl`，添加如下内容：

```stylus
// 设置背景图片
body {
    background:url(/uploads/background.jpg);
    //background:url(/uploads/background.webp);
    background-repeat: no-repeat;   //图片无法铺满时，是否重复以及重复方式
    background-attachment:fixed;    //图片是否跟随滚动
    background-size: cover;         //覆盖
    background-position:50% 50%;    //图片位置
}
```

* url 中可以是图片链接，或者是图片目录。可以将图片命名为 `background.jpg`，并放入 `source/uploads` 文件夹内。


### 博客内容背景设置半透明

* 打开上一步编辑的文件 `source/_data/styles.styl`，新增如下内容：

```stylus
//博客内容透明化
//文章内容的透明度设置
if (hexo-config('motion.transition.post_block')) {
  .post-block {
    background: rgba(255,255,255,0.9);
    opacity: 0.9;
    radius: 10px;
    padding: 40px;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
  .pagination, .comments {
    opacity: 0;
  }

  +tablet() {
    margin: 20px;
    padding: 10px;
  }

  +mobile() {
    margin: 15px;
    padding: 15px;
  }
}

//侧边框透明度设置
.sidebar {
  opacity: 0.9;
}

//菜单栏透明度设置
.header-inner {
  background: rgba(255,255,255,0.9);
}

//搜索框（local-search）透明度设置
.popup {
  opacity: 0.9;
}
```


### 优化行内代码块的样式

* 打开上一步编辑的文件 `source/_data/styles.styl`，继续新增如下内容：

```stylus
// 针对Code代码标签的美化
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```


### 首页文章间距调整

- 我用外观是 Mist，所以修改文件内容：
`theme/next/source/css/_schemes/Mist/_posts-expand.styl`

```stylus
.post-block:not(:first-child) {
    //margin-top: 120px;
    margin-top: 66px;
}
```

> 默认的 120px 改成 66px

- 首页第一篇文章的内外边距

    - 编辑文件 `themes/next/source/css/_variables/Mist.styl`：

    ```stylus
    $content-padding-top        = 66px;
    $content-padding-bottom     = 80px;
    //$posts-first-padding        = 80px;
    $posts-first-padding        = 40px;
    //$posts-first-padding-mobile = 60px;
    $posts-first-padding-mobile = 30px;
    ```

    - 编辑文件 `themes/next/source/css/_schemes/Muse/_layout.styl` ：

    ```stylus
    .main-inner {
        main-container();
        padding-top: $content-padding-top; //新增
        padding-bottom: $content-padding-bottom;

        +mobile() {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    ```


### 首页只显示文章标题

- 文件 `themes/next/layout/_macro/post.njk` ，68 行修改：

```swig
<p class="myDesign">{{ post.description }}</p>
```

- 文章详情页隐藏描述，上面的也需要 css 样式结合，在自定义样式中加入如下代码：

```stylus
// 隐藏描述，首页和文章详情页
.post-description,.myDesign {
    display:none;
}
```

> 前提，文章需要添加 `description` 配置项


### 给文章标题加编号

> [参考文章](https://www.xiaotanzhu.com/hexo/2022-05-01-auto-numbering-in-hexo.html)

自定义样式中加入如下代码：

```stylus
// 文章标题加编号
body { counter-reset: h2counter; }
h2 { counter-reset: h3counter; }
h3 { counter-reset: h4counter; }
h4 { counter-reset: h5counter; }
h5 { counter-reset: h6counter; }
h6 { }

.post-body h2:before {
  counter-increment: h2counter;
  content: counter(h2counter) ".\0000a0\0000a0";
}
.post-body h3:before {
  counter-increment: h3counter;
  content: counter(h2counter) "."counter(h3counter) ".\0000a0\0000a0";
}
.post-body h4:before {
  counter-increment: h4counter;
  content: counter(h2counter) "."counter(h3counter) "."counter(h4counter) ".\0000a0\0000a0";
}
.post-body h5:before {
  counter-increment: h5counter;
  content: counter(h2counter) "."counter(h3counter) "."counter(h4counter) "."counter(h5counter) ".\0000a0\0000a0";
}
.post-body h6:before {
  counter-increment: h6counter;
  content: counter(h2counter) "."counter(h3counter) "."counter(h4counter) "."counter(h5counter) "."counter(h6counter) ".\0000a0\0000a0";
}
```


### 修改引用块的左边框颜色

- 自定义样式中加入如下代码：

```stylus
//修改引用块的左边框颜色
blockquote {
    border-left-color: #c49ce1; // #648ec5 浅蓝色 / #c49ce1 浅紫色
}
```


### 版权声明

- 主题配置文件， `creative_commons` 配置项：

```yml
creative_commons:
  license: by-nc-sa  #权利声明的类型by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero
  sidebar: false     #是否在侧边栏显示
  post: true         #是否在文章下方显示
  language:
```

> 注意：
版权的链接在项目配置文件中的 url 配置项指定
默认是 `url: http://example.com`


### 文章进度显示

- 主题配置文件，`back2top` 配置项：

```yml
back2top:
  enable: true
  # Back to top in sidebar.
  sidebar: false
  # Scroll percent label in b2t button.
  scrollpercent: true #这里改为true，默认是false，不显示
```


### 站内搜索

- 安装插件（[Github链接](https://github.com/next-theme/hexo-generator-searchdb)）

```shell
npm install hexo-generator-searchdb
```

- 项目配置文件新增配置：

```yml
# 搜索
search:
    path: search.json  #支持 json 或者 xml，默认 xml，推荐 json
    field: post
    format: html
    limit: 10000
```

- 主题配置文件， `local_search` 配置项：

```yml
local_search:
    enable: true
```

- 防止谷歌浏览器提醒

    - 如果 form 表单标签里没加 name 或者 id 属性，会有提醒：

        `A form field element has neither an id nor a name attribute.`

    - 现在取消这个提醒

        主题目录下 `layout/_partials/search/localsearch.swig` 文件
        `input` 标签添加一个 `name` 或 `id` 属性即可。


### 字数统计

> [参考文章](https://zbttl-github-io.vercel.app/hexo-ru-men/)

- 安装插件（[Github链接](https://github.com/theme-next/hexo-symbols-count-time)）

```shell
npm install hexo-symbols-count-time
```

- 项目配置文件新增：

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: false
  total_time: false
  exclude_codeblock: false
  awl: 3
  wpm: 275
  suffix: "mins."
```

> 需要重新启动本地环境或者重新编译


### 底部文本居中

> `scheme: Mist` 这里的底部文字默认居左的，没有对应的配置项，只能自定义样式
[参考文章](https://github.com/iissnan/hexo-theme-next/pull/1981#issuecomment-341377798)


- 在自定义样式中加入：

```stylus
//底部文本居中
.footer-inner {
  text-align: center;
}
```


### 压缩代码体积

> [参考文章](https://dkrain.com/posts/hexo%E7%AB%99%E7%82%B9%E4%BC%98%E5%8C%96-%E5%8E%8B%E7%BC%A9%E7%AB%99%E7%82%B9%E5%86%85%E5%AE%B9%E4%BD%93%E7%A7%AF/)

- 安装插件（[Github链接](https://github.com/chenzhutian/hexo-all-minifier)）

```shell
npm install hexo-all-minifier --save
```

- 报错解决

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

- 项目配置文件新增

```yml
# 压缩代码体积
all_minifier: true

  # 这个有问题，暂时不用
js_concator:
  enable: false
  bundle_path: '/js/bundle.js'
  front: false
  silent: false

html_minifier:
  enable: true
  ignore_error: false
  silent: false
  exclude:

css_minifier:
  enable: true
  silent: false
  exclude:
    - "*.min.css"

js_minifier:
  enable: true
  mangle: true
  silent: false
  output:
  compress:
  exclude:
    - "*.min.js"

image_minifier:
  enable: true
  interlaced: false
  multipass: false
  optimizationLevel: 2
  pngquant: false
  progressive: false
  silent: false
```


### 文章链接优化

> [参考文章](https://www.xiemingzhao.com/posts/Hexoblogurloptimize.html)

- 安装插件（[Github](https://github.com/ohroy/hexo-abbrlink)）

```shell
npm install hexo-abbrlink --save
```

- 项目配置文件

```yml
permalink: posts/:abbrlink.html
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
abbrlink:
  alg: crc32  # 算法：crc16(default) and crc32
  rep: hex    # 进制：dec(default) and hex
```

> 上面配置完了，url是根据算法随机生成的
> 加 `posts` 的好处：编译完成后会把文章都放在 `public/posts` 文件夹，方便管理

- 自定义URL，在文章配置里加入 `abbrlink` 配置项，就可以指定当前文章的 URL 地址了

```yml
abbrlink: your_blog_url
```

> 上面加完之后，完整的地址就是 domain/posts/your_blog_url.html
> 当然 `your_blog_url` 这个值最好是数字字母，不要有汉字
> 自定义URL是可选的，文章链接优化一定要做，为了下面评论系统做铺垫


### Github Pages部署

- 创建 Github 账号

- 创建仓库，demo `<user>.github.io`，public，readme...

- 项目配置文件：

```yml
deploy:
  type: git
  repository: https://github.com/your-name/your-name.github.io.git
  branch: main
```

- 安装插件（[Github链接](https://github.com/hexojs/hexo-deployer-git)）

```shell
npm install hexo-deployer-git --save
```

- 清理

```shell
npx hexo clean
```

- 编译

```shell
npx hexo generate
```

- 推送

```shell
npx hexo deploy
```

> 在这个过程中需要 Github 账号授权


### 自定义域名

> **参考**
> - [关于自定义域名和 GitHub 页面](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
> - [管理 GitHub Pages 站点的自定义域](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
> - [使用 HTTPS 保护 GitHub Pages 站点](https://docs.github.com/zh/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
> - [验证 GitHub Pages 的自定义域](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

- 购买域名，推荐 [namesilo](https://www.namesilo.com/) ，经济实惠。
- DNS解析
    - 先解析 `@` ，A 类型，解析 4 个 IP
        - 185.199.108.153
        - 185.199.109.153
        - 185.199.110.153
        - 185.199.111.153
    - 再解析 `www` ，CNAME 类型，解析到 `<user>.github.io`
- 域名验证，所在仓库->设置(settings)->Custom domain，填入买的域名
    - 等待 DNS 检测
    - 当出现 `DNS check successful` 的时候，说明检测成功
- 检测成功后，刷新页面，勾选 `Enforce HTTPS` ，强制 HTTPS
    - 这个过程中，需要等一会儿，Github Pages 的服务器会去申请免费的 SSL 证书。
    - 如果成功，刷新页面后，将出现 `Your site is live at https://yourdomain/`
- **重要**
    - DNS 检测成功后，Github Pages 会在该仓库根目录创建一个 CNAME 的文件，文件内容就是买的域名
    - 可以把这个文件下载下来，放到本地项目 `source` 目录中，下次推送就没问题了
    - 如果不弄这一步的话，下一次推送后将无法访问自定义域名
    - 如果忘记这一步的话，而且还推送了...就需要重新进入该仓库设置页面，进行 DNS 检测...

> 正常情况下，如果访问 www 域名，会自动跳转到 apex 域。


### 开启访问统计

- 主题配置文件，开启不蒜子

```yml
busuanzi_count:
  enable: true
```

- 修改模板内容 `themes/next/layout/_partials/footer.njk`

```swig
本站访客数 <span id="busuanzi_value_site_uv"></span> 人次
本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
```

> - 不蒜子官方链接
> [链接1](https://busuanzi.ibruce.info/) [链接2](http://ibruce.info/2015/04/04/busuanzi/)


### Giscus 评论系统

> [参考文章](http://kuring.me/post/hexo-giscus/)

- **注意：要做之前的文章链接优化，否则后面有坑**
- 确保仓库是公开的（public）
- 仓库安装 [giscus](https://github.com/apps/giscus)（GitHub App），选择对应的 `repo` ，不要选 `所有`
- 仓库开启 Discussions 功能
    - `Settings -> General -> Features -> Discussions`
- [获取配置](https://giscus.app/zh-CN)

```html
<script src="https://giscus.app/client.js"
        data-repo="仓库名"
        data-repo-id="仓库 ID"
        data-category="Announcements"
        data-category-id="分类 ID"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
```

> 重点: `data-repo` 、 `data-repo-id` 、`data-categories` 、`data-category-id`

- 项目安装插件（[Github链接](https://github.com/next-theme/hexo-next-giscus)）

```shell
npm install hexo-next-giscus
```

> 人家仓库里点名了，就是要用 next 新仓库地址，我也是从老仓库过来的，踩了很多坑！
> **注意：**
> 如果你在测试这个插件的时候出现了这个报错
``Error: Unable to call `next_data`, which is undefined or falsey``
> 那就是你的版本不对，马上更新到 `v8+` 版本吧！

- 项目配置文件新增：

```yml
giscus:
  enable: false
  repo:  # 仓库名
  repo_id:  # 仓库 ID
  category: Announcements # Github discussion category
  category_id:  # 分类 ID
  # Available values: pathname | url | title | og:title
  mapping: pathname
  strict: 0
  # Available values: 0 | 1
  reactions_enabled: 1
  # Available values: 0 | 1
  emit_metadata: 1
  # Available values: light | light_high_contrast | light_protanopia | light_tritanopia | dark | dark_high_contrast | dark_protanopia | dark_tritanopia | dark_dimmed | preferred_color_scheme | transparent_dark | noborder_light | noborder_dark | noborder_gray | cobalt | purple_dark
  theme: light
  # Available values: en | zh-CN
  lang: zh-CN
  # Place the comment box above the comments
  input_position: top
  # Load the comments lazily
  loading: lazy
```

> 基本上是参照上面的配置得来的
> **建议：关闭 pjax**
> **注意：**
> - 如果当前页面有人留言了，那就会展示别人的留言
> - 如果当前页面没人留言，对于留言请求会返回 404（正常情况）
> - 当且仅当有一个人登录 GitHub 留言，就会有记录，下次就可以正常展示留言了

- 自定义样式

```stylus
if (hexo-config('motion.transition.post_block')) {
  .post-block, .comments.giscus-container {
    background: rgba(255,255,255,0.9);
    opacity: 0.9;
    border-radius: 10px;
    padding: 40px;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
  //...
}
```

> 注意：这个需要参照上面 `博客内容背景设置半透明` ，写到 `if` 条件中


### 国内可访问

> 众所周知，Github Pages 在国内的访问巨慢，有些时候根本不能访问，所以要找一个 DNS 代理商
> 找了一圈，就用 Cloudflare 吧

- [注册链接](https://www.cloudflare.com/zh-cn/)
- 填写域名、域名解析（4 个 `@` ，1 个 `www` ）
- 域名商更改 `NS` 地址（CF给提供的）
- 等待 5-10 分钟左右，ping 域名检查 IP 是否改变
    - 如果改变了，说明 DNS 修改成功
    - 如果 IP 没变，继续等...
- 问题：域名重定向过多（如果出现）【[参考](https://blog.atago.moe/2022/12/07/%E8%B6%85%E8%AF%A6%E7%BB%86%E4%BD%BF%E7%94%A8github-pages%E5%92%8Chexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)】
    - CF -> SSL/TLS 加密模式切换为：`完全（严格）`


### 404页面

- 直接在该仓库根目录创建一个 404.html 即可。【[参考](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)】
- 还需要把这个 404 页面放到本地项目的主题文件夹 `themes/next/source` 中


### 添加 README.md

- 在项目目录 `source` 目录下，新建 README.md 文件
- 项目配置文件 `skip_render` 配置项

```yml
skip_render: ['README.md']
```


### 常用插件

- [Hexo Filter MathJax](https://github.com/next-theme/hexo-filter-mathjax)：渲染数学公式
- 更多插件：<https://theme-next.js.org/plugins/>


## 常用命令

```shell
# 完整写法: hexo generate ，根据源文件生成静态网页
hexo g
# 完整写法: hexo deploy ，发布推送到 GitHub Pages
hexo d
# 完整写法: hexo server ，本地部署测试
hexo s
# 清空静态网页 cache ，然后 hexo d 重新生成
hexo clean
```


## 备用


### 本地环境 false

- `busuanzi_count` 主题配置文件
- `giscus` 项目配置文件
- `all_minifier` 项目配置文件


### 找错

```shell
npm audit
```

## 总结

- 迷茫 + CV + 理解 + 测试（反复） = 成站

> 萌新 ♥ 的博客建站尝试
> 如果没有这些大佬的无私分享，那将是寸步难行...
> 至于官方的文档，基本上没参考过...

## 参考文章

- [未知的世界](https://www.philoli.com/building-a-blog-from-scratch/)
