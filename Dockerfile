# Use a slim version of Node for a smaller footprint
# FROM node:24-slim
FROM node:24

# Set the environment variable so Corepack is always ready
# ENV COREPACK_ENABLE_AUTO_PIN=0 

# Enable Corepack (the modern way to manage Yarn/PNPM versions)
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

RUN chown -R node:node /app
USER node

# Copy only the files needed for install
COPY package.json yarn.lock* .yarnrc.yml* ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install

# Copy the rest of your source code
COPY . .

# Expose the port Vite runs on (default is 5173)
EXPOSE 5173

# Run the dev server
# Vite needs the --host flag to talk to your browser from the container
CMD ["yarn", "dev", "--host", "0.0.0.0"]
