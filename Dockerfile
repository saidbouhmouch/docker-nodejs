FROM node:16.13.0
WORKDIR /app
COPY package.json .
RUN npm install --only=production
EXPOSE 4000