FROM node:alpine
WORKDIR /usr/app
COPY package.json ./
COPY .env.local ./
RUN npm install --only=prod
