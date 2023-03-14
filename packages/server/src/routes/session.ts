import Router from '@koa/router'
import SessionController from '../controllers/session'

const router = new Router()

router.post('/sessions', SessionController.createSession)

export default router
