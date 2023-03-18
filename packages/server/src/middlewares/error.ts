import { Context, Next } from 'koa'
import { validateFail, duplicateKey } from '../utils/errorMessage'

export default async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    const { name, code } = err
    console.log(name)

    if (name === 'ValidationError') {
      const errMsg = Object.values(err.errors).map((value: any) => {
        const { path } = value
        return validateFail(path)
      })
      ctx.status = 400
      return (ctx.body = {
        err: errMsg.join(','),
      })
    }

    if (name === 'TypeError') {
      ctx.status = 400
      return (ctx.body = {
        err: '类型错误',
      })
    }

    if (name === 'MongoServerError' && code === 11000) {
      const errMsg = Object.keys(err.keyPattern).map((value: any) =>
        duplicateKey(value)
      )
      ctx.status = 400
      return (ctx.body = {
        err: errMsg.join(','),
      })
    }

    if (name === 'UnauthorizedError') {
      ctx.status = 401
      return (ctx.body = {
        err: '用户无权限',
      })
    }

    if (name === 'NoUser') {
      ctx.status = 400
      return (ctx.body = {
        err: '用户名不存在',
      })
    }

    if (name === 'WrongPassword') {
      ctx.status = 400
      return (ctx.body = {
        err: '密码错误',
      })
    }

    ctx.status = 500
    return (ctx.body = {
      err: '未知错误',
    })
  }
}
