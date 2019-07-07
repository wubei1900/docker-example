FROM node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install  --registry=https://registry.npm.taobao.org
USER node
EXPOSE 8082
