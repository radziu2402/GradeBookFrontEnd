FROM node:20.11.0 AS build
WORKDIR /app
COPY ./gradebookfrontend/package*.json ./
RUN npm install
COPY ./gradebookfrontend/ ./
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
