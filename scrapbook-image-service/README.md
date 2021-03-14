# Getting Started
This microservice is responsible for storing image related information into no sql database i.e. MongoDB

### Technologies used:

Java 15

SpringBoot 2.4

RESTful API

MongoDB

Maven

### Project Installation

- Port: 8080

$ git clone https://github.com/airavata-courses/scrapbook.git

$ cd scrapbook-image-service

$ mvn clean install

$ cd target

$ java -jar -Dspring.profiles.active=<profile name like local, dev, prod> <jar name with extension>


### Swagger

http://localhost:8080/swagger-ui/#/