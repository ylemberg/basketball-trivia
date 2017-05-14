const expect = require('chai').expect
const playersUtil = require('../server/utilities/playersUtil')

describe('Random player', () => {
  it('should be returned when randomPlayer util invoked', () => {
    return playersUtil.randomPlayer()
      .then(player => {
        expect(player).to.be.ok
        expect(player).to.have.ownProperty('name')
        expect(player).to.have.ownProperty('startYear')
        expect(player).to.have.ownProperty('endYear')
      })
  })
})

describe('NBA library', () => {
  it('should get every player that has ever played', () => {
    return playersUtil.requestAllPlayers()
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
    return playersUtil.requestAllPlayers()
      .then(requestedPlayers => {
        players = requestedPlayers
      })
  })

  it('should get every player that has ever played', () => {
    const player = playersUtil.pickRandomPlayerFromArray(players)
    expect(player).to.be.ok
    expect(player).to.be.an('object')
    expect(players.includes(player)).to.be.true
  })
})

describe('Players Util', () => {
  let player

  before(() => {
    return playersUtil.requestAllPlayers().then(players => playersUtil.pickRandomPlayerFromArray(players))
      .then(unformattedPlayer => {
        player = unformattedPlayer
      })
  })

  it.only('should get every player that has ever played', () => {
    const formattedPlayer = playersUtil.formatPlayer
    expect(formattedPlayer).to.be.ok
    expect(formattedPlayer).to.be.an('object')
    expect(player).to.have.ownProperty('name')
    expect(player).to.have.ownProperty('startYear')
    expect(player).to.have.ownProperty('endYear')
  })
})
