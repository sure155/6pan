### 6盘多用户文件切换及视频在线播放
#### 注意只对视频文件进行处理
###### 这个只是个人平时写的小玩意bug多不要在意，高手看看就行了不要指点了。
##### 采用flask开发，docker部署。
#### 主要功能：
- 1、添加多用户方便切换
- 2、视频在线播放，原理就是获取到下载地址然后调用在线播放器。限制和下载的时效性一样。
- 3、搜索功能
### 除了以上三点再没其它功能了
## 由于6盘还处于开发阶段api随时可能更改，再加上现有已知bug。该应用随时会挂，玩玩就行了。
目前不清楚什么原因导致bridge模式下无法使用网络，请使用host模式。本地端口为:10003.如需修改可通过命令行修改/app/main.py 和/etc/nginx/conf.d/nginx.conf两个文件的端口号即可
