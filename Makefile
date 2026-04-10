all: dev

dev:
	docker compose up --build

stop:
	docker compose down -v

logs:
	docker compose logs -f
