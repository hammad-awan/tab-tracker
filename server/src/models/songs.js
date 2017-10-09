module.exports = (sequelize, DataTypes) => {
  const songSchema = {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  }

  const Song = sequelize.define('Song', songSchema)

  return Song
}
