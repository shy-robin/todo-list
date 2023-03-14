import UserModel from '../models/user'
import { RequestBody } from '../@types/request'

export default class SessionService {
  public static async createSession(params: RequestBody) {
    const data = await UserModel.findOne({
      username: params.username,
    })
    return data
  }
}
