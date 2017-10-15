const songHistoryDao = require('../persistence/songHistoryDao')

module.exports = {
  async index(req, res) {
    try {
      const songHistories = await songHistoryDao.get(req.user.id)
      res.send(songHistories)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve song histories: ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      const songHistories = await songHistoryDao.get(req.user.id, req.body.songId)
      if (songHistories.length > 0) {
        return res.send(songHistories[0])
      }
      const songHistory = await songHistoryDao.create(req.user.id, req.body.songId)
      res.send(songHistory)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a song history: ${ex.message}` })
    }
  }
}
