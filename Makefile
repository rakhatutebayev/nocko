.PHONY: help docker-up docker-down docker-build docker-logs docker-ps docker-clean docker-restart docker-shell-cms docker-shell-website health-check backup migrate setup

help:
	@echo "NOCKO Platform - Available Commands"
	@echo ""
	@echo "Docker Commands:"
	@echo "  make docker-up          - Start all services"
	@echo "  make docker-down       - Stop all services"
	@echo "  make docker-build      - Build all containers"
	@echo "  make docker-restart    - Restart all services"
	@echo "  make docker-logs       - Show logs from all services"
	@echo "  make docker-ps         - Show running containers"
	@echo "  make docker-clean      - Stop and remove all containers, volumes"
	@echo "  make docker-shell-cms  - Open shell in CMS container"
	@echo "  make docker-shell-website - Open shell in Website container"
	@echo ""
	@echo "Utility Commands:"
	@echo "  make health-check      - Check health of all services"
	@echo "  make backup            - Backup Strapi database and uploads"
	@echo "  make migrate            - Setup permissions and migrate content"
	@echo "  make setup             - First-time setup (start services + health check)"

docker-up:
	@echo "🚀 Starting NOCKO Platform services..."
	docker compose up -d
	@echo "✅ Services started. Waiting for health checks..."
	@sleep 10
	@echo ""
	@echo "📋 Service URLs:"
	@echo "   Strapi Admin: http://localhost:1337/admin"
	@echo "   Next.js Site: http://localhost:3000"
	@echo ""
	@echo "💡 Use 'make docker-logs' to view logs"

docker-down:
	@echo "🛑 Stopping NOCKO Platform services..."
	docker compose down

docker-build:
	@echo "🔨 Building Docker images..."
	docker compose build --no-cache

docker-restart:
	@echo "🔄 Restarting services..."
	docker compose restart

docker-logs:
	@echo "📋 Showing logs (Ctrl+C to exit)..."
	docker compose logs -f

docker-ps:
	@echo "📊 Running containers:"
	@docker compose ps

docker-clean: docker-down
	@echo "🧹 Cleaning up containers and volumes..."
	@docker compose down -v
	@echo "✅ Cleanup complete"

docker-shell-cms:
	@echo "🐚 Opening shell in CMS container..."
	docker compose exec cms sh

docker-shell-website:
	@echo "🐚 Opening shell in Website container..."
	docker compose exec website sh

# Health check
health-check:
	@echo "🔍 Running health check..."
	@node scripts/health-check.js

# Backup
backup:
	@echo "💾 Creating backup..."
	@node scripts/backup-strapi.js

# Migration
migrate:
	@echo "📦 Setting up Strapi..."
	@if [ -z "$$STRAPI_API_TOKEN" ]; then \
		echo "❌ STRAPI_API_TOKEN environment variable is required"; \
		echo "   export STRAPI_API_TOKEN=your_token_here"; \
		exit 1; \
	fi
	@echo "Setting up permissions..."
	@node scripts/setup-strapi-permissions.js
	@echo ""
	@echo "Migrating content..."
	@node scripts/migrate-content-to-strapi.js

# Setup (first time)
setup:
	@echo "🚀 Setting up NOCKO Platform..."
	@echo ""
	@echo "1. Starting Docker services..."
	@docker compose up -d
	@echo ""
	@echo "2. Waiting for services to start..."
	@sleep 15
	@echo ""
	@echo "3. Running health check..."
	@node scripts/health-check.js || true
	@echo ""
	@echo "✅ Setup complete!"
	@echo ""
	@echo "📋 Next steps:"
	@echo "  1. Create admin account at http://localhost:1337/admin"
	@echo "  2. Generate API token in Strapi Admin (Settings → API Tokens)"
	@echo "  3. Run 'export STRAPI_API_TOKEN=your_token && make migrate'"
