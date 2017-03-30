const playerCtrl = require('../controllers/playerCtrl')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

module.exports = {
  getPlayers
}
