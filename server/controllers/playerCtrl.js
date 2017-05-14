const playerUtil = require('../utilities/playersUtil')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const randomPlayer = (req, res) => {
  playerUtil.randomPlayer()
    .then(data => {
      res.send('Getting a random player')
    }).catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  getPlayers,
  randomPlayer
}
