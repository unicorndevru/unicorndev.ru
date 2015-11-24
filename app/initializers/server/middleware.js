const App = require('../../../public/server.bundle.js')


module.exports = function (config){
  return function*(next) {
    yield* next

    if (this.method != 'HEAD' && this.method != 'GET') return
    if (this.body != null || this.status != 404) return

    var result = yield App.matchRoute(this.request.url)

    GLOBAL.navigator = {
      userAgent: this.state.userAgent.source
    }

    if(result.error){
      this.status = 500
    } else if(result.redirectLocation){
      this.status = 302
      this.response.redirect(result.redirect.to)
    } else if(result.render){
      this.status = 200
      yield this.render(config.view, {
        app: result.render()
      })
    } else {
      this.status = 404
      this.body = 'Not found'
    }
  }
}
