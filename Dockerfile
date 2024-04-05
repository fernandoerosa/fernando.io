FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install \
    && npm install -g @ionic/cli@latest \
    && ionic build --prod \
    && ionic cap copy \
    && ionic cap sync

FROM nginx:stable-alpine3.17-slim

COPY --from=builder /app/www /usr/share/nginx/html

COPY conf.d/*.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
