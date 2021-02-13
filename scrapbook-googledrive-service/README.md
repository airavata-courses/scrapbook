# Getting Started
This microservice is responsible for communication with google drive. It exposes API for
upload/download image, create album, upload image to album etc.

server port : 9090

###Technologies used:
Java 15

SpringBoot 2.4

RESTful API

Google drive APIs

### Project Installation
$ git clone https://github.com/airavata-courses/scrapbook.git

$ cd scrapbook-googledrive-service

$ mvn clean install

$ cd target

$ java -jar -Dspring.profiles.active=<profile name like local, dev, prod> <jar name with extension>

