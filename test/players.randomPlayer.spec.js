const expect = require('chai').expect
const randomPlayer = require('../server/utilities/randomPlayerUtil')
const nba = require('nba.js')

describe('Random player', () => {
  it('should be returned when randomPlayer util invoked', () => {
    return randomPlayer.get()
      .then(player => {
        expect(player).to.be.ok
        expect(player).to.have.ownProperty('name')
        expect(player).to.have.ownProperty('startYear')
        expect(player).to.have.ownProperty('endYear')
        expect(false).to.be.true
      })
  })
})

describe('NBA library', () => {
  it('should get every player that has ever played', () => {
    return randomPlayer.requestAllPlayers()
      .then(players => {
        expect(players).to.be.ok
        expect(players).to.be.instanceof(Array)
        expect(players).to.have.lengthOf(4163)
      })
  })
})

describe('Players Util', () => {
  let players

  before(() => {
    return randomPlayer.requestAllPlayers()
      .then(requestedPlayers => {
        players = requestedPlayers
      })
  })

  it('should get every player that has ever played', () => {
    const player = randomPlayer.pickRandomPlayerFromArray(players)
    expect(player).to.be.ok
    expect(player).to.be.an('object')
    expect(players.includes(player)).to.be.true
  })
})

describe('Players Util', () => {
  let player

  before(() => {
    return randomPlayer.requestAllPlayers().then(players => randomPlayer.pickRandomPlayerFromArray(players))
      .then(unformattedPlayer => {
        player = unformattedPlayer
      })
  })

  it('should get every player that has ever played', () => {
    const formattedPlayer = randomPlayer.formatPlayer(player)
    expect(formattedPlayer).to.be.ok
    expect(formattedPlayer).to.be.an('object')
    expect(formattedPlayer).to.have.ownProperty('name')
    expect(formattedPlayer).to.have.ownProperty('startYear')
    expect(formattedPlayer).to.have.ownProperty('endYear')
  })
})
