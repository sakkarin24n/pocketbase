/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31choc0u14es8y5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amwnbafj",
    "name": "type",
    "type": "select",
    "required": false,
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31choc0u14es8y5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amwnbafj",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "deposit",
        "withdraw",
        "transfer"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
