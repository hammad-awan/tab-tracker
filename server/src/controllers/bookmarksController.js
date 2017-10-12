const bookmarksDao = require('../persistence/bookmarksDao')

module.exports = {
  async index(req, res) {
    try {
      const bookmark = await bookmarksDao.get(req.query.songId, req.query.userId)
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve a bookmark: ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      let bookmark = await bookmarksDao.get(req.body.songId, req.body.userId)
      if (bookmark) {
        return res.status(400).send({ error: 'The bookmark for this song already exists for the user' })
      }
      bookmark = await bookmarksDao.create(req.body)
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a bookmark: ${ex.message}` })
    }
  },
  async delete(req, res) {
    try {
      const bookmark = await bookmarksDao.delete(req.params.id)
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to delete a bookmark: ${ex.message}` })
    }
  }
}
