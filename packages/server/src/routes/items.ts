import Router from '@koa/router'
import ItemsController from '../controllers/items'

const router = new Router()

router.get('/items', ItemsController.getItemList)

export default router
