const db = require('../models')

module.exports = {
  async register(req, res) {
    try {
      const user = await db.User.create(req.body)
      res.send(user.toJSON())
    } catch (ex) {
      console.log(ex)
      res.status(400).send({ error: 'This email account is already in use.' })
    }
  }
}
