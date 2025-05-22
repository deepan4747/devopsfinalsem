#!/bin/bash
docker build -t task003 .
echo Hyyy
docker login -u deepan47 -p Deepan11032004
docker tag task003 deepan47/devopssem
docker push deepan47/devopssem
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
