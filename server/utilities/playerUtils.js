const nba = require('nba.js').stats

nba.allPlayers((err, res) => {
  if (err) {
    console.log(err)
  }

  console.log(res)
})
