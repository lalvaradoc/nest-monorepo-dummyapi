#!/bin/bash

schema=$1
name=$2

if [ $schema = "sub-app" ]
then
    echo "Generating sub-app $name"
    nest generate sub-app $name
    npm run generate:scaffold --name=$name
fi