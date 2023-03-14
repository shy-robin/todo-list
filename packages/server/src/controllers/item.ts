import { Context } from 'koa'
import ItemService from '../services/item'
import { RequestBody, Query } from '../@types/request'

export default class ItemController {
  public static async getItems(ctx: Context) {
    const data = await ItemService.getItems(ctx.query as Query)
    ctx.body = {
      list: data,
    }
  }

  public static async createItem(ctx: Context) {
    await ItemService.createItem(ctx.request.body as RequestBody)
    ctx.body = {
      message: 'ok',
    }
  }
}
