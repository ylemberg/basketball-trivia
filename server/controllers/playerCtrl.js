const playerUtil = require('../utilities/playerUtils')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const randomPlayer = (req, res) => {
  playerUtil.randomPlayer((err, data) => {
    res.send('Getting a random player')
  })
}

module.exports = {
  getPlayers,
  randomPlayer
}
