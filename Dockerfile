FROM node:18

RUN apt-get update && apt-get install -y chromium

WORKDIR /app
COPY . .
RUN npm install

ENTRYPOINT ["npm", "test"]
