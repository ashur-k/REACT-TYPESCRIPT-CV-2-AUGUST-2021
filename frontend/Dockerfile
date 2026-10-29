FROM node:22-alpine AS build

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./

RUN npm ci

COPY frontend/ ./

RUN npm run build

FROM nginx:alpine AS runtime

ARG NGINX_CONFIG=infrastructure/local/nginx/nginx.conf

COPY ${NGINX_CONFIG} /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
