/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1mna0b4guybcyk")

  // remove
  collection.schema.removeField("cf8luank")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vluqsbha",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1mna0b4guybcyk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cf8luank",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "deposit",
        "withdraw",
        "transfer"
      ]
    }
  }))

  // remove
  collection.schema.removeField("vluqsbha")

  return dao.saveCollection(collection)
})
