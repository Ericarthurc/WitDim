package handlers

import (
	"github.com/ericarthurc/witdim/witdim_backend/models"

	"github.com/gofiber/fiber/v2"
)

/*
GetItemsHandler | @Desc: Get all items |
@Method: GET |
@Route: "api/v1/items" |
@Auth: Private
*/
func GetItemsHandler(c *fiber.Ctx) error {
	items, err := models.GetItems()
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	return c.JSON(fiber.Map{"success": true, "data": items})
}

/*
GetItemHandler | @Desc: Get item by id |
@Method: GET |
@Route: "api/v1/items/:id" |
@Auth: Private
*/
func GetItemHandler(c *fiber.Ctx) error {
	idParam := c.Params("id")
	item, err := models.GetItem(idParam)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	return c.JSON(fiber.Map{"success": true, "data": item})
}

/*
CreateItemHandler | @Desc: Create new item |
@Method: POST |
@Route: "api/v1/items" |
@Auth: Private
*/
func CreateItemHandler(c *fiber.Ctx) error {
	item := new(models.Item)
	if err := c.BodyParser(item); err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	id, err := models.CreateItem(*item)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	return c.JSON(fiber.Map{"success": true, "data": id})
}

/*
UpdateItemHandler | @Desc: Update item by id |
@Method: PUT |
@Route: "api/v1/items/:id" |
@Auth: Private
*/
func UpdateItemHandler(c *fiber.Ctx) error {
	idParam := c.Params("id")
	item := new(models.Item)
	if err := c.BodyParser(item); err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	err := models.UpdateItem(idParam, *item)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	return c.JSON(fiber.Map{"success": true, "data": "item updated"})
}

/*
DeleteItemHandler | @Desc: Delete item by id |
@Method: DELETE |
@Route: "api/v1/items/:id" |
@Auth: Private
*/
func DeleteItemHandler(c *fiber.Ctx) error {
	idParam := c.Params("id")
	err := models.DeleteItem(idParam)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"success": false, "data": err.Error()})
	}

	return c.JSON(fiber.Map{"success": true, "data": "item removed"})
}
