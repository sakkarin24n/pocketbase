/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rr8e0d0fjsmz0r1");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rr8e0d0fjsmz0r1",
    "created": "2024-07-31 18:24:02.071Z",
    "updated": "2024-07-31 18:24:02.071Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmi8nhhu",
        "name": "num",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
