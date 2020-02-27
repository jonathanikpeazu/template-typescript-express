FROM node:12.16.1

# This will be the working directory for the app.
WORKDIR /usr/src/app

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.0

# Install app dependencies
COPY .yarn ./.yarn
COPY .yarnrc.yml .
COPY ./yarn.lock .
COPY package.json .

RUN yarn set version berry
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
