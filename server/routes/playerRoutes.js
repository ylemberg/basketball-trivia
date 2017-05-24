const playerCtrl = require('../controllers/playerCtrl')

module.exports = router => {
  router.get('/players/:name', playerCtrl.getPlayers)

  router.get('/randomplayer/easymode', playerCtrl.getRandomPlayerInEasyMode)
  router.get('/randomplayer/hardmode', playerCtrl.getRandomPlayerInHardMode)
}
