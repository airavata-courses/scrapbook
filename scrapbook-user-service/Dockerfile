FROM node:latest as node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g mocha
RUN npm install -g chai
# Copy app source code
COPY . .
ENV MONGO_URI=mongodb://localhost:27017/scrapbookUserService
ENV USER_SERVICE=http://localhost:3000/
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]