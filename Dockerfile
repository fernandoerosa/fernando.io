FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @ionic/cli@latest 

RUN ionic build --prod

FROM nginx:stable-alpine3.17-slim

COPY --from=builder /app/www /usr/share/nginx/html

COPY conf.d/*.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]