FROM alpine:latest

RUN apk add --no-cache wget unzip \
    && wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip \
    && unzip ngrok-stable-linux-amd64.zip -d /usr/local/bin \
    && rm ngrok-stable-linux-amd64.zip

COPY ngrok.yml /root/.ngrok2/ngrok.yml

CMD ["ngrok", "start", "--all"]
