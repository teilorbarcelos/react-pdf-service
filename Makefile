.PHONY: install infra-up infra-down infra-clean build dev test test-api

# Default values
APP_NAME=react-pdf-service
PORT=8889

install:
	npm install

infra-up:
	docker compose up -d --build

infra-down:
	docker compose down

infra-clean:
	docker compose down --rmi all --volumes --remove-orphans
	rm -rf dist node_modules

build:
	npm run build

dev:
	npm run dev

test:
	npm test

test-api:
	@echo "Testing PDF Generation (API)..."
	curl -X POST http://localhost:$(PORT)/v1/pdf/generate \
		-H "Content-Type: application/json" \
		-d '{"template": "simple", "data": {"title": "Relatório de Teste", "content": "Este é um PDF gerado com React-PDF e Node.js.", "items": ["Item 1", "Item 2", "Item 3"]}}' \
		--output test_react.pdf
	@echo "PDF saved to test_react.pdf"
