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

#### 5. 使用

1. 进入项目根目录

- 启动进程/应用 
  
  ```bash
  pm2 start bin/www 
  # OR 
  pm2 start app.json
  ```

- 添加进程/应用 

  ```bash
  watch pm2 start bin/www --watch
  ```

- 结束进程/应用 

  ```bash
  pm2 stop www
  ```

- 结束所有进程/应用 

  ```bash
  pm2 stop all
  ```

- 列出所有进程/应用 

  ```bash
  pm2 list
  ```

- 查看某个进程/应用具体情况 

  ```bash
  pm2 describe www
  ```

- 查看进程/应用的资源消耗情况 

  ```bash
  pm2 monit
  ```

- 查看pm2的日志 

  ```bash
  pm2 logs
  ```
- 若要查看某个进程/应用的日志,使用 

  ```bash
  pm2 logs www
  ```
- 重新启动进程/应用 

  ```
  pm2 restart www
  ```
- 重新启动所有进程/应用 

  ```bash
  pm2 restart all
  ```

### 2. 参考文档

[[]]()

### 3. 联系方式

email: yuanmin8888@outlook.com