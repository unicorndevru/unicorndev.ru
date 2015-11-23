const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const koaBody = require('koa-better-body')
const hbs = require('koa-hbs')
const path = require('path')
const userAgent = require('koa-useragent')

const reactAppMiddleware = require('./initializers/server/middleware')

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

app.use(reactAppMiddleware({
  view: "index"
}))


if (!module.parent) {
  var port = process.env.PORT || config.app.port || 3000
  app.listen(port)
  console.log('listening on port ' + port)
}
