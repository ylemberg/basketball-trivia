const expect = require('chai').expect
const randomPlayer = require('../server/utilities/randomPlayerUtil')
const easyPlayers = require('../server/easyModePlayers')

describe('Getting a random player in easy mode', function () {
  it.only('should return an easy mode player', function () {
    const player = randomPlayer.getEasyMode()
    expect(player).to.be.ok
    expect(easyPlayers.includes(player)).to.be.true
  })
})
