const expect = require('chai').expect
const randomPlayer = require('../server/utilities/randomPlayerUtil')

describe('Random player', function () {
  let player
  before(function () {
    return randomPlayer.get()
      .then(result => {
        player = result
      })
  })

  it('should be returned when randomPlayer util invoked', function () {
    expect(player).to.be.ok
    expect(player).to.have.ownProperty('name')
    expect(player).to.have.ownProperty('startYear')
    expect(player).to.have.ownProperty('endYear')
  })
})

describe('NBA library', function () {
  let players
  before(function () {
    return randomPlayer.requestAllPlayers()
      .then(result => {
        players = result
      })
  })

  it('should get every player that has ever played', function () {
    expect(players).to.be.ok
    expect(players).to.be.instanceof(Array)
    expect(players).to.have.lengthOf(4163)
  })
})

describe('Players Util', function () {
  let players

  before(function () {
    return randomPlayer.requestAllPlayers()
      .then(requestedPlayers => {
        players = requestedPlayers
      })
  })

  it('should get every player that has ever played', function () {
    const player = randomPlayer.pickRandomPlayerFromArray(players)
    expect(player).to.be.ok
    expect(player).to.be.an('object')
    expect(players.includes(player)).to.be.true
  })
})

describe('Players Util', function () {
  let player

  before(function () {
    return randomPlayer.requestAllPlayers().then(players => randomPlayer.pickRandomPlayerFromArray(players))
      .then(unformattedPlayer => {
        player = unformattedPlayer
      })
  })

  it('should get every player that has ever played', function () {
    const formattedPlayer = randomPlayer.formatPlayer(player)
    expect(formattedPlayer).to.be.ok
    expect(formattedPlayer).to.be.an('object')
    expect(formattedPlayer).to.have.ownProperty('name')
    expect(formattedPlayer).to.have.ownProperty('startYear')
    expect(formattedPlayer).to.have.ownProperty('endYear')
  })
})
