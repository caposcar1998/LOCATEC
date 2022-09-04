ARG TAG=16-alpine

FROM node:$TAG

# set working directory
WORKDIR /app

# install app dependencies
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY ./client ./

RUN cp -R ./node_modules/.vite/deps_temp ./node_modules/.vite/deps

RUN rm -R ./node_modules/.vite/deps_temp

# start app
CMD ["npm", "run", "dev"]