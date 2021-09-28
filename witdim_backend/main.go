package main

import (
	"github.com/ericarthurc/witdim/witdim_backend/database"
	"github.com/ericarthurc/witdim/witdim_backend/models"
	"github.com/ericarthurc/witdim/witdim_backend/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load("./.env")

	database.ConnectDb()
	models.CreateItemSchema()

	app := fiber.New(fiber.Config{
		// Prefork:      true,
		ServerHeader: "Fiber",
	})

	routes.ItemRoutes(app)

	app.Listen(":3030")
}
