migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d93lk7ny",
    "name": "userEmail",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "gmail.com",
        "outlook.com",
        "yahoo.com",
        "protonmail.com"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  // remove
  collection.schema.removeField("d93lk7ny")

  return dao.saveCollection(collection)
})
