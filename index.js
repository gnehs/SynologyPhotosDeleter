const path = require('path')
const Koa = require('koa');
const serve = require('koa-static')
const mount = require('koa-mount')
const Router = require('koa-router');
const json = require('koa-json');
const app = new Koa();
const router = new Router()


app.use(json())

const api = require('./api.js');
router.use('/api', api.routes())

app.use(mount('/api/photos', serve(path.join(__dirname, '/photos'))))
router.get('/', async (ctx, next) => {
    ctx.body = 'Meow'
})

app.use(router.routes());

app.listen(3001)
console.log('listening on port 3001')
console.log('http://localhost:3001')
console.log('Press Ctrl+C to quit.')