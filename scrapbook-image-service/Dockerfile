# FROM openjdk:15
# MAINTAINER scrapbook.com
# EXPOSE 8080
# COPY target/image-service.jar image.jar
# ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/image.jar"]

FROM openjdk:15
FROM maven AS build
MAINTAINER scrapbook.com
EXPOSE 8080
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean install
# COPY target/googledrive-service.jar googledrive.jar
# ENTRYPOINT ["java","-Dspring.profiles.active=local","-jar","/googledrive.jar"]

VOLUME /tmp
ARG JAR_FILE=target/image-service.jar
ADD ${JAR_FILE} image-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","image-service.jar"]