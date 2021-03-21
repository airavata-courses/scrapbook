#!/bin/bash

docker pull hrishikeshpaul/scrapbook-session-service
docker pull hrishikeshpaul/scrapbook-image-service
docker pull hrishikeshpaul/scrapbook-googledrive-service
docker pull hrishikeshpaul/scrapbook-metadata-service
docker pull hrishikeshpaul/scrapbook-auth-service
docker pull hrishikeshpaul/scrapbook-gateway-service
docker pull hrishikeshpaul/scrapbook-user-service
docker pull hrishikeshpaul/scrapbook-ui

docker-compose up

if [ "$1" == "help" ]; then
  echo ""
  echo "Usage: ./start.sh"
fi