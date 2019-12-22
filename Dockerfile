FROM node:latest as build

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@6.2

COPY . .

RUN npm run build --prod

from nginx:alpine
COPY --from=build /app/dist/my-first-app /usr/share/nginx/html

# CMD ng serve --host 0.0.0.0