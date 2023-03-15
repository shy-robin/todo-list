import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config/secret'

export const genToken = (id: number, expiresIn: string | number = '7d') => {
  const payload = {
    userId: id,
  }

  return jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn,
  })
}
