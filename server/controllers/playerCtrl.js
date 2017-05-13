const playerCtrl = require('../controllers/playerCtrl')

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
