/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zca7oeus",
    "name": "cash",
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
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // remove
  collection.schema.removeField("zca7oeus")

  return dao.saveCollection(collection)
})
