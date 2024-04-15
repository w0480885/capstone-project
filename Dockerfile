FROM node:14
EXPOSE 3000/tcp
WORKDIR .
COPY . .

RUN apt-get update

RUN apt-get install python3 python3-pip -y
RUN pip3 install -r requirements.txt

RUN npm i
RUN npm i -g serve
RUN npm run build

CMD ["npm", "run", "start:prod"]
