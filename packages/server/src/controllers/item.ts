import { Context } from 'koa'
import ItemService from '../services/item'
import { RequestBody } from '../@types/request'

export default class ItemController {
  public static async getItems() {
    await ItemService.getItems()
  }
  public static async createItem(ctx: Context) {
    await ItemService.createItem(ctx.request.body as RequestBody)
    ctx.body = {
      message: 'ok',
    }
  }
}
