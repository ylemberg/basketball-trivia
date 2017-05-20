const randomPlayer = require('../utilities/randomPlayerUtil')

const getPlayers = (req, res) => {
  res.send('Hit /players route')
}

const getRandomPlayerInHardMode = (req, res) => {
  randomPlayer.get()
    .then(player => {
      res.send(player)
    }).catch(err => {
      res.status(500).send(err)
    })
}

const getRandomPlayerInEasyMode = (req, res) => {
  try {
    res.send(randomPlayer.getEasyMode())
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  getRandomPlayerInHardMode,
  getRandomPlayerInEasyMode,
  getPlayers
}
