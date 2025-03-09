FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json  ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["yarn", "dev"]
