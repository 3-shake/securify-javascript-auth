FROM node:24

WORKDIR /js-auth-test

COPY . .

RUN npm i

CMD npm run test
