# Makefile

# Install dependencies
install:
	npm install

# Serve with hot reload at localhost:8080
serve:
	npm run serve

# Build for production
build:
	npm run build

# Lint code
lint:
	npm run lint

# Default target
.PHONY: default
default: install serve
	