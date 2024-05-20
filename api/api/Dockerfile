# Use a base image that includes JDK
# FROM openjdk:17-jdk-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the packaged jar file into the container
# COPY target/*.jar app.jar

# # Expose the port your application runs on
# EXPOSE 8080

# # Set the entry point for the container to run your jar file
# ENTRYPOINT ["java", "-jar", "app.jar"]

# Use the official OpenJDK image as a base
FROM openjdk:17-jdk-alpine

# Add a volume pointing to /tmp
VOLUME /tmp

# The application's jar file
ARG JAR_FILE=target/api-0.0.1-SNAPSHOT.jar

# Copy the jar file to the container
COPY ${JAR_FILE} app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]

