#!/bin/bash

set -e

NAME=candidatexyz
BUCKET=candidatexyz-demo-$NAME
DEPLOYMENT_GROUP=production

# upload common gem
git clone https://github.com/TheLocust3/candidatexyz-common.git common
tar -czvf common.tar.gz common

aws s3 mb s3://$BUCKET
aws s3 rm s3://$BUCKET/common.tar.gz
aws s3 cp common.tar.gz s3://$BUCKET/

#git archive --format=tar.gz -9 -o deploy.tar.gz HEAD
tar -czvf deploy.tar.gz *

aws s3 rm s3://$BUCKET/deploy.tar.gz
aws s3 cp deploy.tar.gz s3://$BUCKET/

rm deploy.tar.gz
rm common.tar.gz
rm -rf common/

aws deploy create-deployment --application-name $NAME --deployment-group-name $DEPLOYMENT_GROUP --ignore-application-stop-failures --s3-location bundleType=tgz,bucket=$BUCKET,key=deploy.tar.gz --file-exists-behavior=OVERWRITE
