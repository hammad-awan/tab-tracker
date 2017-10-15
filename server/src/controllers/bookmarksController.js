const bookmarksDao = require('../persistence/bookmarksDao')

module.exports = {
  async index(req, res) {
    try {
      const bookmarks = await bookmarksDao.get(req.user.id, req.query.songId)
      res.send(bookmarks)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve bookmark(s): ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      const bookmarks = await bookmarksDao.get(req.user.id, req.body.songId)
      if (bookmarks.length > 0) {
        return res.status(400).send({ error: 'The bookmark for this song already exists for the user' })
      }
      const bookmark = await bookmarksDao.create(req.user.id, req.body.songId)
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a bookmark: ${ex.message}` })
    }
  },
  async delete(req, res) {
    try {
      const bookmark = await bookmarksDao.delete(req.params.id, req.user.id)
      if (!bookmark) {
        return res.status(403).send({ error: 'You do not have access to this bookmark.' })
      }
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to delete a bookmark: ${ex.message}` })
    }
  }
}
