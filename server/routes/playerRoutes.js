const router = require('express').Router()
const playerCtrl = require('../controllers/playerCtrl')

router.get('/getall', playerCtrl.getPlayers)

module.exports = router
