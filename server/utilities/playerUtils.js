const nba = require('nba.js').stats

const randomPlayer = cb => {
  console.log('here is cb', cb)
  console.log('here is nba.allPlayers', nba.allPlayers)
  nba.allPlayers((err, players) => {
    if (err) {
      console.log('ERROR GETTING PLAYERS: ', err)
    }

    console.log('players', players)
    cb()
  })
}

module.exports = {
  randomPlayer
}
