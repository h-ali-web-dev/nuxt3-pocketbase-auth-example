migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kjxtzxx5wtvwu86")

  collection.listRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kjxtzxx5wtvwu86")

  collection.listRule = null

  return dao.saveCollection(collection)
})
