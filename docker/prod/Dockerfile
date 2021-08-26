FROM node:14.17.5

WORKDIR /home/app-prod

ADD package.json /home/app-prod/package.json

RUN npm install

ADD . /app

EXPOSE 4000
