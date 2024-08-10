/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qpbv39uc",
    "name": "credit",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1qpn4cdx",
    "name": "role",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Members",
        "Admins"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // remove
  collection.schema.removeField("qpbv39uc")

  // remove
  collection.schema.removeField("1qpn4cdx")

  return dao.saveCollection(collection)
})
