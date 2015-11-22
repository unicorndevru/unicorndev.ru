const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const koaBody = require('koa-better-body')
const hbs = require('koa-hbs')


// const ReactApp = require('./public/server.bundle.js')
const config = require('environmental').config()

var app = module.exports = koa()

app.use(hbs.middleware({
  viewPath: __dirname + '/public'
}))

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

  this.set('Content-type', 'text/html')

  // var stats = require("./stats.generated.json");
  //
  // app.get("/", function(req, res) {
  // 	res.end(page(req, stats.assetsByChunkName.main));
  // });

  yield this.render('index', {
    app: 'test'
    // app: React.renderToString(ReactApp({}))
  });
})


if (!module.parent) {
  var port = process.env.PORT || config.app.port || 3000
  app.listen(port)
  console.log('listening on port ' + port)
}
