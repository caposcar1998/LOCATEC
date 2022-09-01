DOCKER = docker
COMPOSE = docker-compose
COMPOSE_FILE = $(CURDIR)/infra/deploy/local/docker-compose.yml


.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: run-app
run-app: # Run the application in a container

	$(COMPOSE) -f $(COMPOSE_FILE) build client
	$(COMPOSE) -f $(COMPOSE_FILE) build server
	$(COMPOSE) -f $(COMPOSE_FILE) build database