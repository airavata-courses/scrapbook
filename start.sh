#!/bin/bash
kubectl apply -f scrapbook-ui/scrapbook-zookeeper.yaml
kubectl apply -f scrapbook-kafka/scrapbook-broker.yaml
kubectl apply -f scrapbook-auth-service/scrapbook-auth-service.yaml
kubectl apply -f scrapbook-session-service/scrapbook-session-service.yaml
kubectl apply -f scrapbook-gateway-service/scrapbook-gateway-service.yaml
kubectl apply -f scrapbook-user-service/scrapbook-user-service.yaml
kubectl apply -f scrapbook-image-service/scrapbook-image-service.yaml
kubectl apply -f scrapbook-googledrive-service/scrapbook-googledrive-service.yaml
kubectl apply -f scrapbook-metadata-service/scrapbook-metadata-service.yaml
kubectl apply -f scrapbook-ui/scrapbook-ui.yaml