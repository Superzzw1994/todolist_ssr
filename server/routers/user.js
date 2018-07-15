const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'yj' && user.password === 'yj961126') {
    ctx.session.user = {
      username: 'yj'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'yj'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
