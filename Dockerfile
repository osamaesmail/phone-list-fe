FROM node:16-alpine

USER root
RUN npm install -g @quasar/cli

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8080

RUN yarn dev
