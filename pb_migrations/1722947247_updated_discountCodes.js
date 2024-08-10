/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88")

  collection.name = "discounts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88")

  collection.name = "discountCodes"

  return dao.saveCollection(collection)
})
