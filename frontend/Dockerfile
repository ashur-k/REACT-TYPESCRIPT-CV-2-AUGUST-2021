FROM node:22-alpine AS base

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./

RUN npm ci

COPY frontend/ ./

FROM base AS development

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]



FROM base AS production-build

RUN npm run build


FROM nginx:alpine AS production

ARG NGINX_CONFIG=infrastructure/production/nginx/nginx.conf

COPY --from=production-build /app/dist/ /usr/share/nginx/html/

COPY ${NGINX_CONFIG} /etc/nginx/templates/default.conf.template

EXPOSE 80
