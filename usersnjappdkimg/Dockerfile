FROM node:latest
COPY /app /home/node/app
RUN cd /home/node/app && npm install
EXPOSE 3005
ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/home/node/app/index.js"]
