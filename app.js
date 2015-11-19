var koa = require('koa')
var serve = require('koa-static')
var send = require('koa-send')
var koaBody = require('koa-better-body')
var config = require('environmental').config()

var app = module.exports = koa()

app.use(serve(__dirname + '/public'))
app.use(koaBody({
  extendTypes: {
    json: ['application/json']
  }
}))

require('./app/routes')(app)


app.use(function*(next){
  yield* next;

  if (this.method != 'HEAD' && this.method != 'GET') return;
  if (this.body != null || this.status != 404) return;

  yield send(this, '/public/index.html');
})


if (!module.parent) {
  var port = process.env.PORT || config.app.port || 3000
  app.listen(port)
  console.log('listening on port ' + port)
}
