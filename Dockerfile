FROM node:14

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0:8080

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

# Run the application
CMD npm start