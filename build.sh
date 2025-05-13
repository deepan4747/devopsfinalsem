#!/bin/bash
docker build -t task47 .
echo Hyyy
docker login -u deepan47 -p Deepan11032004
docker tag task47 deepan47/devopsfinalsem
docker push deepan47/devopsfinalsem
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
