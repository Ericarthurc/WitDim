package database

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	ItemsCollection *mongo.Collection
	Ctx             = context.TODO()
)

func ConnectDb() {
	client, err := mongo.Connect(Ctx, options.Client().ApplyURI(os.Getenv("MONGO_URI")))
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database("golangy")
	ItemsCollection = db.Collection("items")
}
