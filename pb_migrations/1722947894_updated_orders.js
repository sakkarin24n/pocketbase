/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz23j6g3t33zc1l")

  collection.updateRule = null
  collection.deleteRule = null

  // remove
  collection.schema.removeField("k3seoqer")

  // remove
  collection.schema.removeField("dtaooiaq")

  // remove
  collection.schema.removeField("twdpb5qu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vegbazfl",
    "name": "user",
    "type": "relation",
    "required": false,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrqmvk52",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "imd3fy3v",
    "name": "total",
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
    "id": "kykwsyo9",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "completed",
        "cancelled"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz23j6g3t33zc1l")

  collection.updateRule = ""
  collection.deleteRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3seoqer",
    "name": "product_ids",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "owygagk5r7lpm8y",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtaooiaq",
    "name": "total_amount",
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

  // remove
  collection.schema.removeField("vegbazfl")

  // remove
  collection.schema.removeField("zrqmvk52")

  // remove
  collection.schema.removeField("imd3fy3v")

  // remove
  collection.schema.removeField("kykwsyo9")

  return dao.saveCollection(collection)
})
