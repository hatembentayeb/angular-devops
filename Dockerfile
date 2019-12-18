FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@6.2

COPY . .


CMD ng serve -H 0.0.0.0