const authenticationController = require('./controllers/authenticationController')
const songsController = require('./controllers/songsController')

const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')

module.exports = (app) => {
  app.post('/api/login', authenticationController.login)
  app.post('/api/register', authenticationControllerPolicy.register, authenticationController.register)

  app.get('/api/songs', songsController.index)
  app.post('/api/songs', songsController.create)

  app.get('/api/songs/:id', songsController.get)
  app.put('/api/songs/:id', songsController.save)
}
