import { Context } from 'koa'
import UserService from '../services/user'
import { RequestBody } from '../@types/request'

export default class UserController {
  public static async createUser(ctx: Context) {
    await UserService.createUser(ctx.request.body as RequestBody)
    ctx.body = {
      message: 'ok',
    }
  }
}
