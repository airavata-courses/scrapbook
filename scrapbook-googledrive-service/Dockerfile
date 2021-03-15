FROM openjdk:15
FROM maven:3.6.0-jdk-11-slim AS build
MAINTAINER scrapbook.com
EXPOSE 9090
COPY target/googledrive-service.jar googledrive.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/googledrive.jar"]