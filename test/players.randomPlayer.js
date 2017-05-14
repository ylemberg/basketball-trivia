const expect = require('chai').expect
const playerUtil = require('../server/utilities/playerUtils')

describe('Random player', () => {
  it('should be returned when randomPlayer util invoked', () => {
    return playerUtil.randomPlayer()
      .then(player => {
        expect(player).to.be.ok
        expect(player).to.have.ownProperty('name')
        expect(player).to.have.ownProperty('startYear')
        expect(player).to.have.ownProperty('endYear')
      })
  })
})
