/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lsxjmetnxzgq9ma",
    "created": "2024-07-31 16:27:23.689Z",
    "updated": "2024-07-31 16:27:23.689Z",
    "name": "Fuc",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vpezmyhc",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "voxuoa7w",
        "name": "balance",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lsxjmetnxzgq9ma");

  return dao.deleteCollection(collection);
})
