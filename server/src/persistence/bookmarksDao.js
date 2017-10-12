const db = require('../models')

module.exports = {
  async create(bookmark) {
    return db.Bookmark.create({
      SongId: bookmark.songId,
      UserId: bookmark.userId
    })
  },
  get(songId, userId) {
    return db.Bookmark.findOne({
      where: {
        SongId: songId,
        UserId: userId
      }
    })
  },
  async delete(id) {
    const bookmark = await db.Bookmark.findById(id)
    bookmark.destroy(bookmark)
    return bookmark
  }
}
