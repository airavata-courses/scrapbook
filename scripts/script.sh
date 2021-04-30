#!/bin/bash

ssh centos@149.165.172.4
sudo scp ./$1/haproxy.cfg centos@149.165.172.4:etc/haproxy/haproxy.cfg
sudo systemctl restart haproxy