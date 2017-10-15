const authenticationController = require('./controllers/authenticationController')
const songsController = require('./controllers/songsController')
const bookmarksController = require('./controllers/bookmarksController')
const songHistoryController = require('./controllers/songHistoryController')

const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/api/login', authenticationController.login)
  app.post('/api/register', authenticationControllerPolicy.register, authenticationController.register)

  app.get('/api/songs', songsController.index)
  app.post('/api/songs', songsController.create)

  app.get('/api/songs/:id', songsController.get)
  app.put('/api/songs/:id', songsController.save)

  app.get('/api/bookmarks', isAuthenticated, bookmarksController.index)
  app.post('/api/bookmarks', isAuthenticated, bookmarksController.create)
  app.delete('/api/bookmarks/:id', isAuthenticated, bookmarksController.delete)

  app.get('/api/song-history', isAuthenticated, songHistoryController.index)
  app.post('/api/song-history', isAuthenticated, songHistoryController.create)
}
