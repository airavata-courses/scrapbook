FROM openjdk:15
FROM maven:3.6.3-openjdk-15 AS build
MAINTAINER scrapbook.com
EXPOSE 9090
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml -X clean install

VOLUME /tmp
# ARG JAR_FILE=/home/app/target/googledrive-service.jar
# ADD ${JAR_FILE} googledrive-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/home/app/target/googledrive-service.jar"]