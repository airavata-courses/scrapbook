#!/bin/bash

# Deployments list
# sb-auth 
# sb-gateway
# sb-gdrive 
# sb-image 
# sb-metadata
# sb-session
# sb-ui
# sb-user

kubectl scale --replicas=$1 deployment $2