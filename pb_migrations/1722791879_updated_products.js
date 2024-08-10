/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owygagk5r7lpm8y")

  // remove
  collection.schema.removeField("jlkhwjxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "en4i7azz",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owygagk5r7lpm8y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlkhwjxd",
    "name": "image",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("en4i7azz")

  return dao.saveCollection(collection)
})
