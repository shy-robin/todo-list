import { Context, Next } from 'koa'
import { validateFail } from '../utils/errorMessage'

export default async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    const { name } = err
    console.log(name)
    if (name === 'ValidationError') {
      const errMsg = Object.values(err.errors).map((value: any) => {
        const { path } = value
        return validateFail(path)
      })
      return (ctx.body = {
        err: errMsg.join(','),
      })
    }
    if (name === 'TypeError') {
      return (ctx.body = {
        err: '类型错误',
      })
    }
    return (ctx.body = {
      err: '未知错误',
    })
  }
}
