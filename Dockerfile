# Use a slim version of Node for a smaller footprint
FROM node:24-slim

# Set the working directory inside the container
WORKDIR /app

# Copy BOTH the package.json and the yarn lockfile
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your source code
COPY . .

# Expose the port Vite runs on (default is 5173)
EXPOSE 5173

# Run the dev server
# Vite needs the --host flag to talk to your browser from the container
CMD ["yarn", "dev", "--host"]
