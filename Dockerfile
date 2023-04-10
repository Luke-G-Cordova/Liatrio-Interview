
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# should figure out how to make this refer to an env var
EXPOSE 3000

CMD ["node", "server.js"]