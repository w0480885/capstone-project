FROM node:14
EXPOSE 80/tcp
WORKDIR ./server
COPY . .

ENV PORT=80

RUN apt-get update
RUN apt-get install vim -y
RUN apt-get install nginx -y
RUN rm /etc/nginx/sites-enabled/default

RUN cp config.nginx /etc/nginx/sites-available/config.nginx
RUN cp config.nginx /etc/nginx/sites-enabled/config.nginx

RUN npm i
RUN npm run build

RUN apt-get install python3 python3-pip -y
RUN pip3 install -r requirements.txt

CMD ["npm", "run", "start:prod"]
