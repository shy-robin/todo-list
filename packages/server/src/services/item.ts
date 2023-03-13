import ItemModel from '../models/item'
import { RequestBody } from '../@types/request'

export default class ItemService {
  public static async getItems() {
    await ItemModel.find({})
  }
  public static async createItem(params: RequestBody) {
    await ItemModel.create(params)
  }
}
