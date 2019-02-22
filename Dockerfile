FROM node:8.11.1-alpine
WORKDIR /usr/src/app
VOLUME [ "/usr/src/app" ]
RUN npm install -g nodemon

ENV NODE_ENV=production
ENV DATABASE=mongodb://mongodb:27017/ttt
ENV PORT=8000

EXPOSE 8000

CMD [ "nodemon", "-L", "src/index.js" ]
