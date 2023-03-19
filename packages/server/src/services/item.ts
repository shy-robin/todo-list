import UserModel from '../models/user'
import ItemModel from '../models/item'
import { Query } from '../@types/request'
import { CreateItemRequest } from '../@types/item'

export default class ItemService {
  public static async getItems(userId: string, params: Query) {
    const { page, pageSize, sortby, order } = params
    const data = await ItemModel.find({ authorId: userId }, null, {
      sort: {
        [sortby]: order,
      },
      skip: (+page - 1) * +pageSize,
      limit: +pageSize,
    }).select('-_id -__v -authorId') // exclude fields
    return data
  }

  public static async createItem(userId: string, params: CreateItemRequest) {
    const user = await UserModel.findById(userId)
    if (!user) {
      const err = new Error()
      err.name = 'NoUser'
      throw err
    }

    await ItemModel.create({
      ...params,
      authorId: user._id,
    })
  }
}
