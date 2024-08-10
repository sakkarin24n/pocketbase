/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88")

  // remove
  collection.schema.removeField("lilu43p0")

  // remove
  collection.schema.removeField("is66bbbb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1u0b041",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "percentage",
        "fixed"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bc9mcplg",
    "name": "value",
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
    "id": "hhoxyass",
    "name": "expiry",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qsyjv0xr",
    "name": "uses",
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
    "id": "izbo33zv",
    "name": "max_uses",
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
    "id": "lilu43p0",
    "name": "expiry_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

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

  // remove
  collection.schema.removeField("s1u0b041")

  // remove
  collection.schema.removeField("bc9mcplg")

  // remove
  collection.schema.removeField("hhoxyass")

  // remove
  collection.schema.removeField("qsyjv0xr")

  // remove
  collection.schema.removeField("izbo33zv")

  return dao.saveCollection(collection)
})
