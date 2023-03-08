import Koa from 'koa'
import { PORT } from './config/constant'
import Items from './routes/items'

const app = new Koa()

// allowedMethods: set ctx.status and add Allow to response header automatically
app.use(Items.routes()).use(Items.allowedMethods())

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running...`)
})

export default app
