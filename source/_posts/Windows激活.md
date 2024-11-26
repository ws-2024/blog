---
title: Windows激活
description: 1
categories:
  - Windows
tags:
  - Windows
abbrlink: 22b15887
date: 2024-11-26 15:31:51
---


## 激活方式


> 早期的激活方式是软件激活，有一定的风险，现在都是命令激活 MAS


- [Github](https://github.com/massgravel/Microsoft-Activation-Scripts)
- [官网](https://massgrave.dev/)



## 具体激活方法

> 根据 Github 或官网摘录


### 方法一：

> 工具：`PowerShell` ，必须用这个，**管理员方式运行**
> 支持版本：`Win8+`

- 主要命令

```shell
irm https://get.activated.win | iex
```

- 备用命令（如果主要不能用，被墙或者其它）

```shell
irm https://massgrave.dev/get | iex
```



### 方法二：

> 该激活方式为传统软件激活
> 支持版本：`Win7+`


1. 使用下面提供的链接下载文件：
<https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip>
or
<https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip>

2. 右键单击下载的 `zip` 文件并解压

3. 在解压的文件夹中，找到名为 `All-In-One-Version` 的文件夹

4. 运行名为 `MAS_AIO.cmd` 的文件

5. 您将看到激活选项，请按照屏幕上的说明进行操作


## 总结

现在大多数都是 win10 版本，用 win7 的比较少，所以基本上都是用第一种方法
