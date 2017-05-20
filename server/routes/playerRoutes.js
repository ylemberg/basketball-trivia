const playerCtrl = require('../controllers/playerCtrl')

module.exports = router => {
  router.get('/players/:name', playerCtrl.getPlayers)

  router.get('/randomplayer/hardmode', playerCtrl.getRandomPlayer)
  router.get('/randomplayer/easymode', playerCtrl.getRandomPlayer)
}
