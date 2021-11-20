const Router = require('koa-router');
const router = new Router()
const version = require('./package.json').version;
router.get('/info', async (ctx, next) => {
    ctx.body = { version }
})

module.exports = router;