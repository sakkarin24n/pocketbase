/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jx8oxd4abb09h88",
    "created": "2024-08-04 17:21:35.729Z",
    "updated": "2024-08-04 17:21:35.729Z",
    "name": "discountCodes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qcs26s0y",
        "name": "code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "60o8ugfc",
        "name": "discount_percentage",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("jx8oxd4abb09h88");

  return dao.deleteCollection(collection);
})
