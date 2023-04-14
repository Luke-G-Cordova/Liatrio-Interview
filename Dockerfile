
FROM node:16

WORKDIR /usr/src/app

ENV PORT=80

COPY package*.json ./

RUN npm install

COPY . .

# should figure out how to make this refer to an env var
EXPOSE 80

CMD ["node", "server.js"]