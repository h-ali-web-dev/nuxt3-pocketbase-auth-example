migrate((db) => {
  const collection = new Collection({
    "id": "pnrv8jd72l6yrdq",
    "created": "2022-12-27 18:53:01.681Z",
    "updated": "2022-12-27 18:53:01.681Z",
    "name": "userInfo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "krrd1c4p",
        "name": "firstName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tuxotyrm",
        "name": "lastName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3dfw6hew",
        "name": "emailAddress",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 3,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kdfzieqy",
        "name": "mailingAddress",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 80,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rcp0mvdf",
        "name": "gender",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Male",
            "Female",
            "Other"
          ]
        }
      },
      {
        "system": false,
        "id": "qyx7ucjo",
        "name": "degree",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "MS",
            "BS",
            "FSc",
            "Matric"
          ]
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq");

  return dao.deleteCollection(collection);
})
