FROM node:hydrogen

WORKDIR /user-registration/app

COPY package.json ./user-registration

COPY . .

RUN yarn install

CMD ["npm", "start"]

EXPOSE 3000
