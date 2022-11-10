const Router = require('koa-router');
const router = new Router()
const version = require('./package.json').version;
const { getFiles, delFiles } = require('./scanner.js');
router.get('/info', async (ctx, next) => {
    ctx.body = { version }
})
router.get('/list', async (ctx, next) => {
    ctx.body = await getFiles()
})
router.post('/delete', async (ctx, next) => {
    const files = ctx.request.body;
    await delFiles(files);
    ctx.body = { success: true }
})
module.exports = router;