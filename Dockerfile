FROM node:16-alpine

WORKDIR /app

COPY . .

#RUN npm install -g @quasar/cli && \
#    npm install -g @vue/cli && \
#    npm install -g @vue/cli-init
RUN yarn

EXPOSE 8080

CMD ["yarn", "dev"]
