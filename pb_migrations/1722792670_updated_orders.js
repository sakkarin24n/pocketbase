/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz23j6g3t33zc1l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twdpb5qu",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vhro0mx42smv49q",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz23j6g3t33zc1l")

  // remove
  collection.schema.removeField("twdpb5qu")

  return dao.saveCollection(collection)
})
