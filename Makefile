# Makefile

# Install dependencies
install:
	yarn install

# Serve with hot reload at localhost:8080
serve:
	yarn serve

# Build for production
build:
	yarn build

# Lint code
lint:
	yarn lint

# Default target
.PHONY: default
default: install serve
