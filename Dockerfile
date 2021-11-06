FROM node:16

USER root
RUN npm install -g @quasar/cli

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8080

