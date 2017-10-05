const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy.js')

module.exports = (app) => {
  app.post('/api/register', authenticationControllerPolicy.register, authenticationController.register)
}
