const db = require('../models')

module.exports = {
  async create(userId, songId) {
    return db.Bookmark.create({
      UserId: userId,
      SongId: songId
    })
  },
  get(userId, songId) {
    let whereClause = { UserId: userId }
    if (songId) {
      whereClause.SongId = songId
    }
    return db.Bookmark.findAll({
      where: whereClause,
      include: {
        model: db.Song
      }
    })
  },
  async delete(id, userId) {
    const bookmark = await db.Bookmark.findOne({
      where: {
        id: id,
        UserId: userId
      }
    })
    if (bookmark) {
      bookmark.destroy(bookmark)
    }
    return bookmark
  }
}
