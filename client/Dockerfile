# pull official base image
FROM node

# set working directory
WORKDIR /app

# install app dependencies
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY ./client ./

# start app
CMD ["npm", "run", "dev"]