FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
#RUN npm install -g node@12.0.0
#RUN npm install react-scripts -g --silent
#RUN npm install -g expo-cli
#RUN expo init earthxhack --template blank --name earthhack
RUN yarn install
#RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY . . 
#--from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]doc


