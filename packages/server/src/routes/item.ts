import Router from '@koa/router'
import ItemController from '../controllers/item'

const router = new Router()

router.get('/items', ItemController.getItems)

router.post('/items', ItemController.createItem)

export default router
