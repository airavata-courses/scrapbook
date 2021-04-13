#!/bin/bash

if [ $2 == "all" ]; then
    echo "Scaling $2 to $1 replica(s)"
    kubectl scale --replicas=$1 deployment sb-auth
    kubectl scale --replicas=$1 deployment sb-gateway
    kubectl scale --replicas=$1 deployment sb-gdrive
    kubectl scale --replicas=$1 deployment sb-image
    kubectl scale --replicas=$1 deployment sb-metadata
    kubectl scale --replicas=$1 deployment sb-session
    kubectl scale --replicas=$1 deployment sb-user
    kubectl scale --replicas=$1 deployment sb-ui
else
    echo "Scaling $2 to $1 replica(s)"
    kubectl scale --replicas=$1 deployment $2
fi


