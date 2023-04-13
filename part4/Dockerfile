FROM node:16.14.0

# 复制代码
# 将 当前目录(.) 赋值到 /application
ADD . /application

# 设置容器启动之后默认运行的目录
WORKDIR /application

# 运行命令，安装依赖
# RUN 命令可以有多个，但是可以用 && 连接多个命令来减少层级。
# 例如 RUN npm install && cd /app && mkdir log
RUN npm i pnpm -g && pnpm install

# CMD 指令只能有一个，是容器启动后执行的命令，算是程序的入口。
# 如果还需要运行其他命令可以使用 && 连接，也可以写成一个shell脚本去执行。
# 例如 CMD cd /app && ./start.sh
# CMD node app.js
CMD npx nodemon app.js
