const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/api/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}. Your user was registered!`
  })
})

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log('Localhost server running on port ' + port + '...')
})
