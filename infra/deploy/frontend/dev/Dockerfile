ARG TAG=16-alpine

FROM node:$TAG

# set working directory
WORKDIR /app

# install app dependencies
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm install

# add app
COPY ./client ./

# start app
CMD ["npm", "run", "dev"]