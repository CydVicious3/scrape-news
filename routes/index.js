module.exports = app => {
  require('./apiRoutes.js')(app)
  require('./htmlRoute.js')(app)

}