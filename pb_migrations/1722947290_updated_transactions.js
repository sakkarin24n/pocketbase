/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1mna0b4guybcyk")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1mna0b4guybcyk")

  collection.name = "transactions"

  return dao.saveCollection(collection)
})
