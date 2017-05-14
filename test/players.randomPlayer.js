const expect = require('chai').expect
const randomPlayer = require('../server/utilities/randomPlayerUtil')
const nba = require('nba.js')

// describe('Random player', () => {
//   console.log('CAN I SEE THESE CONSOLESSS???')
//   it('should be returned when randomPlayer util invoked', done => {
//     console.log('ABOUT TO INVOKE GETTTT')
//     randomPlayer.get()
//       .then(player => {
//         expect(player).to.be.ok
//         expect(player).to.have.ownProperty('name')
//         expect(player).to.have.ownProperty('startYear')
//         expect(player).to.have.ownProperty('endYear')
//         done()
//       }).catch(err => {
//         console.log('errrrrrrr', err)
//         done()
//       })
//   }, 10000)
// })

describe('NBA library', () => {
  it.only('should get every player that has ever played', done => {
    console.log('LETS TRY TO SIMPLIFY THIS')
    nba.stats.allPlayers({ IsOnlyCurrentSeason: 0 }).then(data => {
      console.log('OH SHIT WERE INSIDE THE DOT THEN')
      done()
      // return data.CommonAllPlayers
    }).catch(err => {
      console.log('WHAT WENT WRONG????', err)
      done()
    })
    // return randomPlayer.requestAllPlayers()
    //   .then(players => {
    //     console.log('DOT THEN OF REQUEST ALL PLAYERS')
    //     expect(players).to.be.ok
    //     expect(players).to.be.instanceof(Array)
    //     expect(players).to.have.lengthOf(4163)
    //   })
  }, 10000)
})

// describe('Players Util', () => {
//   let players

//   before(() => {
//     return randomPlayer.requestAllPlayers()
//       .then(requestedPlayers => {
//         players = requestedPlayers
//       })
//   })

//   it('should get every player that has ever played', () => {
//     const player = randomPlayer.pickRandomPlayerFromArray(players)
//     expect(player).to.be.ok
//     expect(player).to.be.an('object')
//     expect(players.includes(player)).to.be.true
//   })
// })

// describe('Players Util', () => {
//   let player

//   before(() => {
//     return randomPlayer.requestAllPlayers().then(players => randomPlayer.pickRandomPlayerFromArray(players))
//       .then(unformattedPlayer => {
//         player = unformattedPlayer
//       })
//   })

//   it('should get every player that has ever played', () => {
//     const formattedPlayer = randomPlayer.formatPlayer(player)
//     expect(formattedPlayer).to.be.ok
//     expect(formattedPlayer).to.be.an('object')
//     expect(formattedPlayer).to.have.ownProperty('name')
//     expect(formattedPlayer).to.have.ownProperty('startYear')
//     expect(formattedPlayer).to.have.ownProperty('endYear')
//   })
// })
