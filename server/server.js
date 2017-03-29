const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

const session = require('express-session')

app.use(session({
  secret: 'secretWord',
  cookie: { maxAge: 600000 }, // ten minutes
  resave: false,
  saveUninitialized: true,
}))
