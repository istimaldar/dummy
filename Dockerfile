FROM node:8.15-alpine

WORKDIR /app/

COPY index.js package.json ./
RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "index.js"]
