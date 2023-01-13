migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pnrv8jd72l6yrdq")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
