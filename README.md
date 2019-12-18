# devops with angular 

This repo is aimed to test the gitlab CI/CD by building a simple angular app and deployed to heroku automatically when a push event is triggered.
## Dockerizing the application

### Build the dockerfile 
Run `docker build -t angular-devops:v1 .` to build your image. 

### Run the image created
Run `docker run --name cont -p 4200:4200 angular-devops:v1`.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

