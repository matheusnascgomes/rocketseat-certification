import express from 'express'
import cors from 'cors'

class App {
  express: express.Application

  constructor () {
    this.express = express()
    this.middlewares()
  }

  private middlewares (): void{
    this.express.use(express.json())
    this.express.use(cors())
  }
}

const app = new App()

export default app.express
