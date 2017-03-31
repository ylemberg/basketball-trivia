const playerRoutes = require('./playerRoutes')

module.exports = app => {
  // handle all other (wrong) routes somehow
  app.use('/players', playerRoutes)
}
