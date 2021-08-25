FROM node:14.15.4

WORKDIR /home/api-nix-chat-form

ADD package.json /home/api-nix-chat-form/package.json

RUN npm install

#RUN npm install prisma --save-dev

ADD . /app

EXPOSE 3100

#ENTRYPOINT [ "./docker-scripts/entrypoint.sh" ]

#CMD ["npm", "run", "start", "dev"]

