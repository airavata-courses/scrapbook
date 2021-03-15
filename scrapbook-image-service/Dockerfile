# FROM openjdk:15
# MAINTAINER scrapbook.com
# EXPOSE 8080
# COPY target/image-service.jar image.jar
# ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/image.jar"]

FROM openjdk:15
MAINTAINER scrapbook.com
EXPOSE 9090
# RUN mvn -f pom.xml clean package
# COPY target/googledrive-service.jar googledrive.jar
# ENTRYPOINT ["java","-Dspring.profiles.active=local","-jar","/googledrive.jar"]

VOLUME /tmp
ARG JAR_FILE=target/image-service.jar
ADD ${JAR_FILE} image-service.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","image-service.jar"]