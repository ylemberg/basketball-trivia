const playerUtil = require('../utilities/playerUtils')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const randomPlayer = (req, res) => {
  res.send('Getting a random player')
}

module.exports = {
  getPlayers,
  randomPlayer
}
