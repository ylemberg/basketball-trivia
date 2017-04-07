const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 80

app.use(cors())
app.use(morgan('tiny'))
app.use(express.static(`${__dirname}/../app/build`))
app.use(bodyParser.json())

require('./routes')(app)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
