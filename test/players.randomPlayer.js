const expect = require('chai').expect
const playerUtil = require('../server/utilities/playerUtils')

describe('Random player', () => {
  it('should be returned when randomPlayer util invoked', () => {
    playerUtil((err, data) => {
      expect(err).to.be.a(null)
    })
  })
})
