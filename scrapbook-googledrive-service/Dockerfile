FROM openjdk:15
MAINTAINER scrapbook.com
EXPOSE 9090
# RUN mvn -f pom.xml clean package
# COPY target/googledrive-service.jar googledrive.jar
# ENTRYPOINT ["java","-Dspring.profiles.active=local","-jar","/googledrive.jar"]

VOLUME /tmp
ARG JAR_FILE=target/googledrive-service.jar
ADD ${JAR_FILE} googledrive-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=local","-jar","googledrive-service.jar"]