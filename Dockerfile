FROM node:16

WORKDIR /js-auth-test

COPY . .

RUN npm i

CMD npm run test