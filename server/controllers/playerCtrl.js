const playerUtil = require('../utilities/playersUtil')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const randomPlayer = (req, res) => {
  playerUtil.randomPlayer()
    .then(player => {
      res.send(player)
    }).catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  getPlayers,
  randomPlayer
}
