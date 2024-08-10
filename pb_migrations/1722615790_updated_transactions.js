/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("66e80mlno7b6hrz")

  // remove
  collection.schema.removeField("dxo0wbaa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5ryvjvk",
    "name": "account",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("66e80mlno7b6hrz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxo0wbaa",
    "name": "account",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vhro0mx42smv49q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("j5ryvjvk")

  return dao.saveCollection(collection)
})
