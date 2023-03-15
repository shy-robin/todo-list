import koaJwt from 'koa-jwt'
import { JWT_SECRET_KEY } from '../config/secret'

export default koaJwt({
  secret: JWT_SECRET_KEY,
  // decode jwt to ctx.user.jwtData
  key: 'jwtData',
})
