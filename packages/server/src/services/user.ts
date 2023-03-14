import UserModel from '../models/user'
import { RequestBody } from '../@types/request'

export default class UserService {
  public static async createUser(params: RequestBody) {
    await UserModel.create(params)
  }
}
