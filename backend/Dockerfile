FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/demo.jar demo.jar
EXPOSE 8080
ENTRYPOINT["java","-jar","demo.jar"]