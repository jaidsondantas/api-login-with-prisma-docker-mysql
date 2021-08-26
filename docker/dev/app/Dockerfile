FROM node:14.17.5

WORKDIR /app

ADD package.json /app/package.json

RUN npm install

ADD .. /app

EXPOSE 4000
