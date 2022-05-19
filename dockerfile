FROM node:14

WORKDIR /usr/backend

COPY package*.json ./
RUN npm i

COPY . .