package models

import (
	"errors"
	"fmt"

	"github.com/ericarthurc/witdim/witdim_backend/database"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Item struct {
	Id        primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Product   string             `json:"product" bson:"product"`
	Serial    string             `json:"serial" bson:"serial"`
	Condition string             `json:"condition" bson:"condition"`
}

func GetItem(id string) (Item, error) {
	var item Item
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return item, err
	}

	err = database.ItemsCollection.FindOne(database.Ctx, bson.D{{Key: "_id", Value: objectId}}).Decode(&item)
	if err != nil {
		return item, err
	}

	return item, nil
}

func GetItems() ([]Item, error) {
	var item Item
	var items []Item

	cursor, err := database.ItemsCollection.Find(database.Ctx, bson.D{})
	if err != nil {
		defer cursor.Close(database.Ctx)
		return items, err
	}

	for cursor.Next(database.Ctx) {
		err := cursor.Decode(&item)
		if err != nil {
			return items, err
		}
		items = append(items, item)
	}

	return items, nil
}

func CreateItem(i Item) (string, error) {
	result, err := database.ItemsCollection.InsertOne(database.Ctx, i)
	if err != nil {
		return "0", err
	}
	return fmt.Sprintf("%v", result.InsertedID), err
}

func UpdateItem(id string, i Item) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	// Needs to handle update to single value, currently updating with zero values
	_, err = database.ItemsCollection.UpdateOne(database.Ctx, bson.D{{Key: "_id", Value: objectId}}, bson.D{{Key: "$set", Value: i}})
	if err != nil {
		return err
	}

	return nil
}

func DeleteItem(id string) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	result, err := database.ItemsCollection.DeleteOne(database.Ctx, bson.D{{Key: "_id", Value: objectId}})
	if err != nil {
		return err
	}
	if result.DeletedCount == 0 {
		err = errors.New("no document found")
		return err
	}

	return nil
}
