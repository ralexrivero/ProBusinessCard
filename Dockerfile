# -------- build -----------
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# -------- runtime ----------
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Ajuste de ruta base ya está configurado en vite.config.js con base '/ProBusinessCard/'
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]