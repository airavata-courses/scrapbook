FROM openjdk:15
MAINTAINER scrapbook.com
EXPOSE 8080
COPY target/image-service.jar image.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/image.jar"]