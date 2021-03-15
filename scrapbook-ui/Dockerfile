# base image
FROM node:15.10.0

# # install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install -g npm@7.6.0
RUN npm install
RUN npm install -g @angular/cli@11.1.1

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0


# FROM node:14.2.0-alpine3.11 as builder

# WORKDIR /usr/src/app

# COPY ./package.json ./

# RUN npm install

# COPY . .

# RUN npm run build --prod

# FROM nginx:1.15.8-alpine

# COPY --from=builder /usr/src/app/dist/scrapbook/ /usr/share/nginx/html
