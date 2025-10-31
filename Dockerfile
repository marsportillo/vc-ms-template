FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install deps first (better for caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

# App listens on 3000 inside container
EXPOSE 3000

CMD ["node", "src/server.js"]