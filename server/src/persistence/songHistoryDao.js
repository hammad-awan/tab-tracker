const db = require('../models')
const _ = require('lodash')

module.exports = {
  async create(songHistory) {
    return db.SongHistory.create({
      SongId: songHistory.songId,
      UserId: songHistory.userId
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
      .map(songHistory => songHistory.toJSON())
      .map(songHistory => _.extend({}, songHistory, songHistory.Song))
  }
}
