ARG TAG=16-alpine

FROM node:$TAG AS builder

# set working directory
WORKDIR /app

# install app dependencies
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm install

# add app
COPY ./client ./


RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder ./app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]