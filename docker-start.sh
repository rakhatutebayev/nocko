#!/bin/bash

echo "🐳 NOCKO Platform - Docker Setup"
echo "================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker compose &> /dev/null && ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "✅ Created .env file. Please edit it and set your secrets!"
        echo ""
        echo "⚠️  IMPORTANT: Edit .env file and set secure values for:"
        echo "   - STRAPI_APP_KEYS"
        echo "   - STRAPI_JWT_SECRET"
        echo "   - STRAPI_ADMIN_JWT_SECRET"
        echo "   - STRAPI_API_TOKEN_SALT"
        echo "   - STRAPI_TRANSFER_TOKEN_SALT"
        echo ""
        read -p "Press Enter to continue after editing .env file..."
    else
        echo "❌ .env.example not found. Please create .env file manually."
        exit 1
    fi
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose down 2>/dev/null || true

# Build and start containers
echo "🔨 Building and starting containers..."
docker compose up -d --build

# Wait for services to be ready
echo ""
echo "⏳ Waiting for services to start (30 seconds)..."
sleep 30

# Check service status
echo ""
echo "📊 Service Status:"
docker compose ps

# Check if services are responding
echo ""
echo "🔍 Checking service health..."

# Check PostgreSQL
if docker compose exec -T postgres pg_isready -U postgres > /dev/null 2>&1; then
    echo "✅ PostgreSQL is ready"
else
    echo "⚠️  PostgreSQL is not ready yet"
fi

# Check Strapi
if curl -s http://localhost:1337/api > /dev/null 2>&1; then
    echo "✅ Strapi API is responding"
else
    echo "⚠️  Strapi API is not responding yet (may need more time)"
fi

# Check Next.js
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Next.js is responding"
else
    echo "⚠️  Next.js is not responding yet (may need more time)"
fi

echo ""
echo "📋 Service URLs:"
echo "   Strapi Admin: http://localhost:1337/admin"
echo "   Strapi API:  http://localhost:1337/api"
echo "   Next.js:     http://localhost:3000"
echo ""
echo "💡 Useful commands:"
echo "   View logs:    docker compose logs -f"
echo "   Stop:         docker compose down"
echo "   Restart:      docker compose restart"
echo ""
echo "✅ Setup complete!"



