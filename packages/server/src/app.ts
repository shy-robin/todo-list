import Koa from 'koa'
import { connect } from 'mongoose'
import Item from './routes/item'
import User from './routes/user'
import Session from './routes/session'
import errorHandler from './middlewares/error'
import jwt from './middlewares/jwt'
import bodyParser from 'koa-bodyparser'

export class App {
  public app

  constructor() {
    this.app = new Koa()
    this.handleError()
    this.mountMiddlewares()
    this.connectDB()
    this.mountRoutes()
  }

  private handleError() {
    // 处理错误的中间件
    // 在最开始加载该中间件，一旦发生错误，经过洋葱模型回溯到这个位置
    this.app.use(errorHandler)
  }

  private mountMiddlewares() {
    // 解析请求体并将其放至 ctx.request.body 中
    this.app.use(bodyParser())
  }

  private async connectDB() {
    try {
      await connect('mongodb://127.0.0.1:27017/todo-list')
      console.log('connect mongodb successfully!')
    } catch (err) {
      console.error(err)
    }
  }

  private mountRoutes() {
    // allowedMethods: set ctx.status and add Allow to response header automatically
    // unprotected endpoint
    this.app.use(User.routes()).use(User.allowedMethods())
    this.app.use(Session.routes()).use(Session.allowedMethods())
    // protect endpoint using jwt middleware
    this.app.use(jwt)
    this.app.use(Item.routes()).use(Item.allowedMethods())
  }
}

export default new App().app
