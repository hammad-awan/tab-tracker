const joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }

    const validation = joi.validate(req.body, schema)

    if (validation.error) {
      switch (validation.error.details[0].context.key) {
        case 'email':
          res.status(400).send({ error: 'You must provide a valid email address' })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
          <br/>
          1. It must contain ONLY the following characters: lower case, upper case, numerics.
          <br/>
          2. It must be at least 8 characters in length and not greater than 32 characters in length.`
          })
          break
        default:
          res.status(400).send({ error: 'Invalid registration information' })
          break
      }
    } else {
      next()
    }
  }
}
