import { Context } from 'koa'
import ItemService from '../services/item'
import { Query } from '../@types/request'
import { CreateItemRequest } from '../@types/item'

export default class ItemController {
  public static async getItems(ctx: Context) {
    const { userId } = ctx.state.jwtData
    const data = await ItemService.getItems(userId, ctx.query as Query)
    ctx.body = {
      list: data,
    }
  }

  public static async createItem(ctx: Context) {
    const { userId } = ctx.state.jwtData
    await ItemService.createItem(userId, ctx.request.body as CreateItemRequest)
    ctx.body = {
      message: 'ok',
    }
  }
}
