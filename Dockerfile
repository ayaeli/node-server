FROM node:8.7

ADD . .

# Run dashboard
CMD ["npm", "start"]
