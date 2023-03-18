import UserModel from '../models/user'
import { RequestBody } from '../@types/request'
import { decrypt } from '../utils/secret'

export default class SessionService {
  public static async createSession(params: RequestBody) {
    const data = await UserModel.findOne({
      username: params.username,
    })

    if (!data) {
      const err = new Error()
      err.name = 'NoUser'
      throw err
    }

    if (decrypt(data.password) !== params.password) {
      const err = new Error()
      err.name = 'WrongPassword'
      throw err
    }

    return data
  }
}
