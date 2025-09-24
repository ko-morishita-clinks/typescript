FROM node:16.16.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript@4.7.4
COPY . .
CMD ["npm", "run", "dev"]
