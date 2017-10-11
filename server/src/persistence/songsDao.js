const db = require('../models')

module.exports = {
  create(song) {
    return db.Song.create(song)
  },
  update(song) {
    return db.Song.update(song,
      {
        where: {
          id: song.id
        }
      })
  },
  find(id) {
    return db.Song.findById(id)
  },
  search(searchText) {
    if (searchText) {
      const whereClause = ['title', 'artist', 'genre', 'album'].map(key => ({ [key]: { $like: `%${searchText.trim()}%` } }))
      return db.Song.findAll({
        where: {
          $or: whereClause
        }
      })
    }
    return db.Song.findAll({ limit: 10 })
  }
}
