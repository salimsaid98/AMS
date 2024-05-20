# Use the official Node.js 14 image as the base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN npm run build

# Use nginx image as the base image for serving the Angular app
FROM nginx:alpine

# Copy built Angular app from the builder stage to the nginx html directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 4200
