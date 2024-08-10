/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88")

  // remove
  collection.schema.removeField("60o8ugfc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "is66bbbb",
    "name": "discount_percentage",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "60o8ugfc",
    "name": "discount_percentage",
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

  // remove
  collection.schema.removeField("is66bbbb")

  return dao.saveCollection(collection)
})
