import { Context, Next } from 'koa'
import { validateFail } from '../utils/errorMessage'

export default async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errMsg = Object.values(err.errors).map((value: any) => {
        const { path } = value
        return validateFail(path)
      })
      ctx.body = {
        err: errMsg.join(','),
      }
    }
  }
}
