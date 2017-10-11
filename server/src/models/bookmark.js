module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})
  Bookmark.associate = db => {
    Bookmark.belongsTo(db.User)
    Bookmark.belongsTo(db.Song)
  }
  return Bookmark
}
