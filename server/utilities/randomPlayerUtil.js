const nba = require('nba.js')

const requestAllPlayers = () => {
  console.log('requestALLPLAYERS IS INVOKED')
  return nba.stats.allPlayers({ IsOnlyCurrentSeason: 0 }).then(data => {
    console.log('OH SHIT WERE INSIDE THE DOT THEN')
    return data.CommonAllPlayers
  }).catch(err => {
    console.log('WHAT WENT WRONG????', err)
  })
}

const pickRandomPlayerFromArray = players => players[Math.floor(Math.random() * players.length)]

const formatPlayer = player => {
  return {
    name: player.display_first_last,
    startYear: player.from_year,
    endYear: player.to_year
  }
}

const get = () => {
  console.log('GET IS INVOKED I PROMISE')
  return requestAllPlayers()
    .then(players => formatPlayer(pickRandomPlayerFromArray(players)))
    .catch(err => {
      console.log('PLEAZSSSSSSSS')
      console.log('yooo what is going on', err)
    })
}

module.exports = {
  get,
  requestAllPlayers,
  pickRandomPlayerFromArray,
  formatPlayer
}
