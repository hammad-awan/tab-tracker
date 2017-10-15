const config = require('./config/config')
const db = require('./models')
const passportJwt = require('passport-jwt')

const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

module.exports = (passport) => {
  passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPayload, done) {
      try {
        const user = await db.User.findOne({
          where: {
            id: jwtPayload.id
          }
        })

        if (!user) {
          return done(new Error(), false)
        }
        return done(null, user)
      } catch (ex) {
        return done(new Error(), false)
      }
    }))
}
