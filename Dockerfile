FROM node:16

USER root
RUN npm install -g @quasar/cli

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080
