---
title: 原生js实现类似jQuery(document).ready()方法
description: 1
categories:
  - JavaScript
tags:
  - JavaScript
  - jQuery
abbrlink: e7c83905
date: 2024-11-17 17:36:58
---


- 具体方法如下：

```js
document.ready = function (callback) {
    if (document.addEventListener) {
        const handler = function () {
            document.removeEventListener('DOMContentLoaded', handler, false);
            callback();
        };
        document.addEventListener('DOMContentLoaded', handler, false);
    } else if (document.attachEvent) {
        const handler = function () {
            if (document.readyState === "complete") {
                document.detachEvent('onreadystatechange', handler);
                callback();
            }
        };
        document.attachEvent('onreadystatechange', handler);
    } else if (document.lastChild === document.body) {
        callback();
    }
};
```


- 调用

```js
document.ready(function(){});
```
