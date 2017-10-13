module.exports = (sequelize, DataTypes) => {
  const SongHistory = sequelize.define('SongHistory', {})
  SongHistory.associate = db => {
    SongHistory.belongsTo(db.User)
    SongHistory.belongsTo(db.Song)
  }
  return SongHistory
}
