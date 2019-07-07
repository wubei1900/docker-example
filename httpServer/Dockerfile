FROM node
WORKDIR /usr/src/httpServer
COPY . /usr/src/httpServer
RUN npm install  --registry=https://registry.npm.taobao.org
USER node
EXPOSE 8888
