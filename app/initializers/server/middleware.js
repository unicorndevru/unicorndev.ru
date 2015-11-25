const config = require('environmental').config()


function app(){
  var App = require('../../../public/server.bundle.js')
  if(config.env === 'development'){
    console.log('cache reset')
    delete require.cache[require.resolve('../../../public/server.bundle.js')]
  }

  return App
}

module.exports = function (config){
  return function*(next) {
    yield* next

    if (this.method != 'HEAD' && this.method != 'GET') return
    if (this.body != null || this.status != 404) return

    var result = yield app().matchRoute(this.request.url)

    GLOBAL.navigator = {
      userAgent: this.request.header['user-agent'] || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36'
    }

    if(result.error){
      this.status = 500
    } else if(result.redirectLocation){
      this.status = 302
      this.response.redirect(result.redirect.to)
    } else if(result.render){
      var html = ''
      try {
        html = result.render()
      } catch(e) {
        console.error(e)
      }
      this.status = 200
      yield this.render(config.view, {
        app: html
      })
    } else {
      this.status = 404
      this.body = 'Not found'
    }
  }
}
