FROM node:20.12.2-alpine3.19 AS builder

COPY package.json ./

RUN npm install

FROM node:20.12.2-alpine3.19

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY --chown=node:node --from=builder node_modules .

RUN npm i -g @ionic/cli && \
    npm i -D -E -g @angular/cli && \
    npm i --save-dev @angular-devkit/build-angular

EXPOSE 8100

RUN mkdir .angular && \
    chown node.node .angular && \
    chmod 777 .angular

USER node

ENTRYPOINT [ "sh", "/usr/src/app/docker/entrypoint.sh" ]