# Use an official Node runtime as a parent image
FROM node:16-alpine

RUN mkdir -p /app
# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the Angular application
RUN npm run build 

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["npm", "start"]
