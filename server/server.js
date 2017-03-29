const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser.json())

require('./routes')

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
