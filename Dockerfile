FROM node:16

USER root
RUN npm install -g @quasar/cli

WORKDIR /app

RUN yarn

EXPOSE 4000

CMD ["yarn", "dev"]
