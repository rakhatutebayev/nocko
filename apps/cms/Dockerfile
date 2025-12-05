# Production Dockerfile for Strapi
FROM node:20-alpine

WORKDIR /opt/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Create uploads directory
RUN mkdir -p public/uploads

# Build Strapi
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
