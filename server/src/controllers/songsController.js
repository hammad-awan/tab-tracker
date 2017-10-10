const db = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await db.Song.findAll({ limit: 10 })
      res.send(songs)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve all songs: ${ex.message}` })
    }
  },
  async get(req, res) {
    try {
      const song = await db.Song.findById(req.params.id)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve song with id ${req.params.id}: ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      const song = await db.Song.create(req.body)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a song: ${ex.message}` })
    }
  },
  async save(req, res) {
    try {
      await db.Song.update(req.body,
        {
          where: {
            id: req.params.id
          }
        })
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to update a song: ${ex.message}` })
    }
  }
}
