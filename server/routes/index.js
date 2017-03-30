const playerRoutes = require('./playerRoutes')

module.exports = app => {
  app.use('/players', playerRoutes)
}
