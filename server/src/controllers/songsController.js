const db = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await db.Song.findAll({ limit: 10 })
      console.log(songs)
      res.send(songs)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to retrieve all songs: ${ex.message}` })
    }
  },
  async create(req, res) {
    try {
      console.log(req.body)
      const song = await db.Song.create(req.body)
      res.send(song)
    } catch (ex) {
      res.status(400).send({ error: `An error occurred attempting to create a song: ${ex.message}` })
    }
  }
}
