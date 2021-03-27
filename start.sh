#!/bin/bash

git clone https://github.com/airavata-courses/scrapbook.git
cd scrapbook

echo '\nDeploy Kafka\n'
git checkout main-kafka
kubectl apply -f scrapbook-kafka/scrapbook-zookeeper.yaml
kubectl apply -f scrapbook-kafka/scrapbook-broker.yaml

echo '\nDeploy Gateway\n'
git checkout main-gateway
kubectl apply -f scrapbook-gateway-service/scrapbook-gateway-service.yaml

echo '\nDeploy Auth Service\n'
git checkout main-auth-service
kubectl apply -f scrapbook-auth-service/scrapbook-auth-service.yaml

echo '\nDeploy Session Service\n'
git checkout main-session-service
kubectl appply -f scrapbook-session-service/scrapbook-session-service.yaml

echo '\nDeploy User Service\n'
git checkout main-user-service
kubectl apply -f scrapbook-user-service/scrapbook-user-service.yaml

echo '\nDeploy Image Service\n' 
git checkout main-image-service
kubectl apply -f scrapbook-image-service/scrapbook-image-service.yaml

echo '\nDeploy Google Drive Service\n'
git checkout main-gdrive-service
kubectl apply -f scrapbook-googledrive-service/scrapbook-googledrive-service.yaml

echo '\nDeploy MDE Service\n'
git checkout main-mde-service
kubectl apply -f scrapbook-metadata-service/scrapbook-metadata-service.yaml

echo '\nDeploy UI\n'
git checkout main-UI
kubectl apply -f scrapbook-ui/scrapbook-ui.yaml
