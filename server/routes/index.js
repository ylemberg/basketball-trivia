const playerRoutes = require('./playerRoutes')

module.exports = () => {
  app.use('/players', playerRoutes)
}
