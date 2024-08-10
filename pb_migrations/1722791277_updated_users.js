/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // update
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
        "admin"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhro0mx42smv49q")

  // update
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
})
