FROM node:22.11.0 AS build

WORKDIR .

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build ./build /usr/share/nginx/html