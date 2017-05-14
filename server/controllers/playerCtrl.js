const randomPlayer = require('../utilities/randomPlayerUtil')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const getRandomPlayer = (req, res) => {
  randomPlayer.get()
    .then(player => {
      res.send(player)
    }).catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  getRandomPlayer,
  getPlayers
}
