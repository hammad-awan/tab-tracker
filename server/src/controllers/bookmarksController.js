const bookmarksDao = require('../persistence/bookmarksDao')

module.exports = {
  async index(req, res) {
    try {
      const bookmark = await bookmarksDao.get(req.query.songId, req.query.userId)
      res.send(bookmark)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve a bookmark: ${ex.message}` })
    }
  }
}
