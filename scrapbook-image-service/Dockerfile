FROM openjdk:15-oracle
FROM maven AS build
MAINTAINER scrapbook.com
EXPOSE 8080
COPY src /home/app/src
COPY pom.xml /home/app
RUN java --version
RUN mvn --version
RUN mvn -f /home/app/pom.xml -X clean install

VOLUME /tmp
# ARG JAR_FILE=/home/app/target/googledrive-service.jar
# ADD ${JAR_FILE} googledrive-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/home/app/target/image-service-0.0.1.jar"]
