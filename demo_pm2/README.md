---
title: pm2进程管理器
date: 2020-10-12
tags: Node

---

### 1. PM2介绍

#### 1. PM2简介

1. PM2是一个进程管理工具,管理你的node进程，查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能


#### 2. 主要特性：

- 内建负载均衡（使用 Node cluster 集群模块）

- 后台运行

- 0 秒停机重载

- 具有 Ubuntu 和 CentOS 的启动脚本

- 停止不稳定的进程（避免无限循环）

- 控制台检测

- 提供 HTTP API

- 远程控制和实时的接口API（Nodejs 模块，允许和 PM2 进程管理器交互）

  ![pm2进程管理器](https://static.oschina.net/uploads/space/2020/0508/160802_BSwt_3820517.gif)

#### 3. 安装

- PM2安装

  ```bash
  $ npm install pm2 -g

  # Install latest pm2 version
  $ npm install pm2@next -g
  ```

#### 4. 更新

- PM2更新

  ```bash
  # Save process list, exit old PM2 & restore all processes
  $ pm2 update
  ```

### 2. 参考文档

[[]]()

### 3. 联系方式

email: yuanmin8888@outlook.com