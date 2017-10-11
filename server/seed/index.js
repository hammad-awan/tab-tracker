const db = require('../src/models')
const Promise = require('bluebird')
const users = require('./users.json')
const songs = require('./songs.json')
const bookmarks = require('./bookmarks.json')

db.sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(users.map(user => {
      db.User.create(user)
    }))

    await Promise.all(songs.map(song => {
      db.Song.create(song)
    }))

    await Promise.all(bookmarks.map(bookmark => {
      db.Bookmark.create(bookmark)
    }))
  })
