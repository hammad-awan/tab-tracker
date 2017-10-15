const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./models')
const config = require('./config/config')
const routes = require('./routes')
const passport = require('passport')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

routes(app)

require('./passport')(passport)

db.sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}.`)
  })
})
