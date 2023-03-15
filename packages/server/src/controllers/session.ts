import { Context } from 'koa'
import SessionService from '../services/session'
import { RequestBody } from '../@types/request'
import { decrypt } from '../utils/secret'
import { genToken } from '../utils/jwt'

export default class SessionController {
  public static async createSession(ctx: Context) {
    const requestBody = ctx.request.body as RequestBody
    const data = await SessionService.createSession(requestBody)

    if (!data) {
      ctx.status = 400
      return (ctx.body = {
        err: '用户名不存在',
      })
    }

    if (decrypt(data.password) !== requestBody.password) {
      ctx.status = 400
      return (ctx.body = {
        err: '密码错误',
      })
    }

    const token = genToken(data.id)

    ctx.body = {
      message: 'ok',
      token,
    }
  }
}
