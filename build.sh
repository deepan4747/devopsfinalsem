#!/bin/bash
docker build -t task3 .
echo Hyyy
docker login -u deepan47 -p Deepan11032004
docker tag task3 deepan47/devopsguvi
docker push deepan47/devopsguvi
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
