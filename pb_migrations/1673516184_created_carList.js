migrate((db) => {
  const collection = new Collection({
    "id": "kjxtzxx5wtvwu86",
    "created": "2023-01-12 09:36:24.739Z",
    "updated": "2023-01-12 09:36:24.739Z",
    "name": "carList",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dqn7dffk",
        "name": "manufacturer",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Mazda",
            "Toyota",
            "Audi",
            "Honda"
          ]
        }
      },
      {
        "system": false,
        "id": "rvz3v8qw",
        "name": "modelYear",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1970,
          "max": 2050
        }
      },
      {
        "system": false,
        "id": "8jdmf9np",
        "name": "color",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 15,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zcwedrd6",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "a64ebjto",
        "name": "available",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "6uhebthm",
        "name": "pic",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": [
            "100x50"
          ]
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("kjxtzxx5wtvwu86");

  return dao.deleteCollection(collection);
})
