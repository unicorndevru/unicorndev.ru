const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const koaBody = require('koa-better-body')
const hbs = require('koa-hbs')
const path = require('path')
const userAgent = require('koa-useragent')

const ReactApp = require('../public/server.bundle')

const config = require('environmental').config()


var app = module.exports = koa()

app.use(hbs.middleware({
  viewPath: path.join(__dirname, '../public')
}))
app.use(userAgent())

app.use(serve(path.join(__dirname, '../public')))
app.use(koaBody({
  extendTypes: {
    json: ['application/json']
  }
}))

require('./routes')(app)


app.use(function*(next){
  yield* next

  if (this.method != 'HEAD' && this.method != 'GET') return
  if (this.body != null || this.status != 404) return

  var reactApp = null

  try {
    reactApp = yield ReactApp.render(this.request.url)
  } catch(e) {
    if(e.status){
      if(e.status === 302){
        return this.response.redirect(error.redirect.to)
      } else {
        this.status = e.status
        this.body = e.text
        return
      }
    } else {
      this.status = 500
    }
  }

  this.set('Content-type', 'text/html')

  this.status = reactApp.status
  yield this.render('index', {
    app: reactApp.html
  })
})


if (!module.parent) {
  var port = process.env.PORT || config.app.port || 3000
  app.listen(port)
  console.log('listening on port ' + port)
}
