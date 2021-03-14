FROM openjdk:15
MAINTAINER scrapbook.com
EXPOSE 9098
COPY target/googledrive-service.jar googledrive.jar
ENTRYPOINT ["java","-Dspring.profiles.active=local","-jar","/googledrive.jar"]