const router = new (require('koa-router'))

module.exports = function(controller){

  router.post('/feedback', controller.feedback)
  return router
}
