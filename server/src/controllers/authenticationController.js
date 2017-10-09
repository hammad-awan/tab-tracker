const db = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

function sendDbUserToClient(user, res) {
  const userJson = user.toJSON()
  res.send({
    user: userJson,
    token: jwtSignUser(userJson)
  })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await db.User.create(req.body)
      sendDbUserToClient(user, res)
    } catch (ex) {
      console.log(ex)
      res.status(400).send({ error: 'This email account is already in use.' })
    }
  },
  async login(req, res) {
    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      const loginErrMsg = 'The login information was incorrect.'
      if (!user) {
        return res.status(403).send({ error: loginErrMsg })
      }

      const isPasswordValid = await user.comparePassword(req.body.password)
      if (!isPasswordValid) {
        return res.status(403).send({ error: loginErrMsg })
      }

      sendDbUserToClient(user, res)
    } catch (ex) {
      console.log(ex)
      res.status(500).send({ error: 'An error occurred when attempting to login.' })
    }
  }
}
