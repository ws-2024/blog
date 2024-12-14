---
title: Windows激活密钥
description: 1
categories:
  - Windows
tags:
  - Windows
abbrlink: 1b2785f9
date: 2024-12-14 14:33:44
---


## 查看


### 方法一

- CMD 命令

```shell
wmic path softwarelicensingservice get OA3xOriginalProductKey
```

> 如果这个方法不能查看，可以使用方法二


### 方法二

- Win + R ，打开运行窗口

- 输入 `Regedit` 打开注册表管理器

- 找到下面的路径

```text
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
```

> 右侧的 `BackupProductKeyDefault` 的值就是你的【备份产品密钥】
