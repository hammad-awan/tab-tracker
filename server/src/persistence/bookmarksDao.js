const db = require('../models')
const _ = require('lodash')

module.exports = {
  async create(bookmark) {
    return db.Bookmark.create({
      SongId: bookmark.songId,
      UserId: bookmark.userId
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
      .map(bookmark => bookmark.toJSON())
      .map(bookmark => _.extend({}, bookmark, bookmark.Song))
  },
  async delete(id) {
    const bookmark = await db.Bookmark.findById(id)
    bookmark.destroy(bookmark)
    return bookmark
  }
}
