const playerCtrl = require('../controllers/playerCtrl')

module.exports = router => {
  router.get('/players/:name', playerCtrl.getPlayers)
  router.get('/randomplayer', playerCtrl.getRandomPlayer)
}
