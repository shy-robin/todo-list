import { Context } from 'koa'

export default class ItemsController {
  /**
   * @param {Context} ctx - context
   * @memberof ItemsController
   */
  public static async getItemList(ctx: Context) {
    ctx.status = 400
    ctx.body = {
      message: 'hello',
    }
  }
}
