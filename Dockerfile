FROM node:18-alpine

WORKDIR /code
RUN apk update && \
    apk add xdg-utils xvfb vim
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
