module.exports = {
  port: process.env.PORT || 3030,
  db: {
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PWD || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
