# Getting Started
This microservice is responsible for communication with google drive. It exposes API for
upload/download image, create album, upload image to album etc.

server port : 9090

### Technologies used:

Java 15

SpringBoot 2.4

RESTful API

Google drive APIs

Maven

Docker

Apache Kafka

Swagger : for documentation

### Project Installation

- Port: 9090

$ git clone --branch main-gdrive-service https://github.com/airavata-courses/scrapbook.git

$ cd scrapbook-googledrive-service

$ mvn clean install

## Docker startup
$ docker build -f Dockerfile -t googledrive .
$ docker run -p 9090:9090 googledrive -e \"SPRING_PROFILES_ACTIVE=local

## local startup
$ cd target
$ java -jar -Dspring.profiles.active=<profile name like local, dev, prod> <jar name with extension>

### Topic 

image


### Swagger

http://localhost:9090/swagger-ui/#/

