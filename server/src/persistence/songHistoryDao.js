const db = require('../models')

module.exports = {
  async create(userId, songId) {
    return db.SongHistory.create({
      UserId: userId,
      SongId: songId
    })
  },
  get(userId, songId) {
    let whereClause = { UserId: userId }
    if (songId) {
      whereClause.SongId = songId
    }
    return db.SongHistory.findAll({
      where: whereClause,
      include: {
        model: db.Song
      }
    })
  }
}
