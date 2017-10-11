const songsDao = require('../persistence/songsDao')

module.exports = {
  async index(req, res) {
    try {
      const songs = await songsDao.search(req.query.search)
      res.send(songs)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve all songs: ${ex.message}` })
    }
  },
  async get(req, res) {
    try {
      const song = await songsDao.find(req.params.id)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve song with id ${req.params.id}: ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      const song = await songsDao.create(req.body)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a song: ${ex.message}` })
    }
  },
  async save(req, res) {
    try {
      const song = await songsDao.update(req.body)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to update a song: ${ex.message}` })
    }
  }
}
