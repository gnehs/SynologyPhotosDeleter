const path = require('path')
const fs = require('fs')
const Koa = require('koa');
const serve = require('koa-static')
const mount = require('koa-mount')
const Router = require('koa-router');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router()


app.use(json())
app.use(bodyParser())

const api = require('./api.js');
router.use('/api', api.routes())

app.use(mount('/api/photos', serve(path.join(__dirname, '/photos'))))
app.use(mount('/', serve(path.join(__dirname, '/public'))))
router.get('/', async (ctx, next) => {
    ctx.body = 'Meow'
})

app.use(router.routes());

app.use(async (ctx, next) => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.join(__dirname, '/public/index.html'))
})

app.listen(3001)
console.log('# Synology Photos Deleter')
console.log('# listening on port 3001')
if (process.env.NODE_ENV !== 'production') {
    console.log('# http://localhost:3001')
}