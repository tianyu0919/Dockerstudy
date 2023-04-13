制作自己的镜像。

[连接](https://docker.easydoc.net/doc/81170005/cCewZWoN/N9VtYIIi)

打包命令
```shell
docker build -t test:v1 .
```

- -d 是后台运行
- -p 设置端口号[主机端口:容器端口]
- -t 设置镜像的名称和版本号例如 -t test:v1
- --name 设置容器名字