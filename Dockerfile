# syntax=docker/dockerfile:1
FROM node:16.15.0

RUN echo "set up env"
ENV PORT=8000 \
    DTB_Account=admin \
    PASS=password \
    DB_Domain=localhost \
    DB_PORT=27017
RUN mkdir -p /home/dino/app/
WORKDIR /home/dino/app/

RUN echo "coppy file"
COPY . .

RUN npm install
CMD [ "node", "index.js" ]