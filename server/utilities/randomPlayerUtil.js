const nba = require('nba.js')
const easyPlayers = require('../easyModePlayers')

const requestAllPlayers = () => nba.stats.allPlayers({ IsOnlyCurrentSeason: 0 }).then(data => data.CommonAllPlayers)

const pickRandomPlayerFromArray = players => players[Math.floor(Math.random() * players.length)]

const formatPlayer = player => {
  return {
    name: player.display_first_last,
    startYear: player.from_year,
    endYear: player.to_year
  }
}

const get = () => {
  return requestAllPlayers()
    .then(players => {
      return formatPlayer(pickRandomPlayerFromArray(players))
    })
}

const getEasyMode = () => pickRandomPlayerFromArray(easyPlayers)

module.exports = {
  get,
  requestAllPlayers,
  pickRandomPlayerFromArray,
  formatPlayer,
  getEasyMode
}
