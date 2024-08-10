/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owygagk5r7lpm8y")

  // remove
  collection.schema.removeField("jgolszqt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7dwspvth",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i1mna0b4guybcyk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owygagk5r7lpm8y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgolszqt",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lz23j6g3t33zc1l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("7dwspvth")

  return dao.saveCollection(collection)
})
