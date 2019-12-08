FROM trion/ng-cli as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
#RUN npm config set https-proxy http://192.168.2.1:3128 && \
#    npm config set proxy http://192.168.2.1:3128
#RUN export http_proxy=http://192.168.2.1:3128 && \
#    export https_proxy=$http_proxy

RUN npm ci  --debug 
COPY . .
RUN ng build --prod


FROM nginx:1.17.1-alpine
COPY  --from=builder  dist/my-first-app /usr/share/nginx/html

