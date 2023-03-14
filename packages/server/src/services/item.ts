import ItemModel from '../models/item'
import { RequestBody, Query } from '../@types/request'

export default class ItemService {
  public static async getItems(params: Query) {
    const { page, pageSize, sortby, order } = params
    const data = await ItemModel.find(null, null, {
      sort: {
        [sortby]: order,
      },
      skip: (+page - 1) * +pageSize,
      limit: +pageSize,
    })
    return data
  }

  public static async createItem(params: RequestBody) {
    await ItemModel.create(params)
  }
}
