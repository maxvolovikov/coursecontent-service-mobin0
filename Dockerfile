FROM node:10

RUN mkdir -p /usr/src/app/coursecontent

WORKDIR /usr/src/app/coursecontent

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3333

CMD [ "npm", "start"]