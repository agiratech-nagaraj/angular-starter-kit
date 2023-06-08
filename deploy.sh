#!/bin/bash
docker container stop ui
docker rm ui                # Remove the container with the name "ui"
docker build . -t app-ui
docker container run -d -p 80:80 --name ui app-ui
