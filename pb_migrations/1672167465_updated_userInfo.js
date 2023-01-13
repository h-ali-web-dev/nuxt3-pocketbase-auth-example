migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  // remove
  collection.schema.removeField("3dfw6hew")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
