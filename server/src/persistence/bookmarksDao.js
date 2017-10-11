const db = require('../models')

module.exports = {
  get(songId, userId) {
    console.log(`SongId: ${songId}, UserId: ${userId}`)
    return db.Bookmark.findOne({
      where: {
        SongId: songId,
        UserId: userId
      }
    })
  }
}
