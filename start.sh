#!/bin/bash
if [ "$1" == "ui" ]; then 
  cd scrapbook-ui && npm install && npm start

elif [ "$1" == "auth" ]; then
  cd scrapbook-auth-service && python3 -m venv env && source env/bin/activate && pip install -r requirements.txt && python app.py

elif [ "$1" == "user" ]; then
  cd scrapbook-user-service && npm install && npm run dev

elif [ "$1" == "sess" ]; then
  cd scrapbook-session-service && npm install && npm run dev

elif [ "$1" == "gw" ]; then
  cd scrapbook-gateway-service && python3 -m venv env && source env/bin/activate && pip install -r requirements.txt && python app.py

elif [ "$1" == "gs" ]; then
  cd scrapbook-googledrive-service && rm -rf target && mvn clean && mvn clean install && cd target && java -jar -Dspring.profiles.active=local googledrive-service-0.0.1-SNAPSHOT.jar

elif [ "$1" == "img" ]; then
  cd scrapbook-image-service && rm -rf target && mvn clean && mvn clean install && cd target && java -jar -Dspring.profiles.active=local image-service-0.0.1-SNAPSHOT.jar

elif [ "$1" == "help" ]; then
  echo ""
  echo "Usage: ./start.sh <arg>"
  echo ""
  echo "Arg Values:"
  echo "ui   : scrapbook-ui"
  echo "auth : scrapbook-auth-service"
  echo "user : scrapbook-user-service"
  echo "sess : scrapbook-session-serice"
  echo "gw   : scrapbook-gateway-service"
  echo "img  : scrapbook-image-service"
  echo "gs   : scrapboook-google-drive-service"
  echo ""
  echo ":)"
fi