import Router from '@koa/router'
import UserController from '../controllers/user'

const router = new Router()

router.post('/users', UserController.createUser)

export default router
