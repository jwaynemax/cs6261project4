FROM node:14.21.2

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install -g @angular/cli@13

COPY . .

RUN npm install --global http-server

RUN ng build

COPY COPY ./dist/ ./

EXPOSE 4200

CMD [ "http-server", "./dist/cs6261project4/", "-p", "4200" ]
