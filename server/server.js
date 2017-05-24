const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('tiny'))
app.use(express.static(`${__dirname}/../app/build`))
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
