FROM openjdk:15
FROM maven AS build
MAINTAINER scrapbook.com
EXPOSE 9090
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean install

VOLUME /tmp
ARG JAR_FILE=target/googledrive-service.jar
ADD ${JAR_FILE} googledrive-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","googledrive-service.jar"]