# base image
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Copy all files from current directory to working dir in image
COPY . .

# # install node modules and build assets
RUN npm i && npm run build --prod

# # install angular cli
RUN npm install -g @angular/cli@latest

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the default nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static assets from builder stage
COPY --from=builder /app/dist/scrapbook /usr/share/nginx/html

# Exposing nginx port
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
