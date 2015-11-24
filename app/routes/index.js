const R = require('ramda')

const resources = [
  'feedback'
]

module.exports = function routes(app) {
  R.forEach(function(resourceName){
    var controller = require('../' + resourceName + '/controller')
    var router = require('./' + resourceName)(controller).prefix('/api')
    app.use(router.routes())
    app.use(router.allowedMethods())
  }, resources)
}
