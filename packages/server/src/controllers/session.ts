import { Context } from 'koa'
import SessionService from '../services/session'
import { RequestBody } from '../@types/request'
import { genToken } from '../utils/jwt'

export default class SessionController {
  public static async createSession(ctx: Context) {
    const requestBody = ctx.request.body as RequestBody
    const data = await SessionService.createSession(requestBody)

    const token = genToken(data.id)

    ctx.body = {
      message: 'ok',
      token,
    }
  }
}
