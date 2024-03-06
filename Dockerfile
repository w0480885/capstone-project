FROM node:14
EXPOSE 80/tcp
WORKDIR /src
COPY . .
RUN npm run build
RUN pip install -r requirements.txt
CMD ["npm", "start"]
