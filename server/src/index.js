import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { dbConnection, useRedis } from './database/index.js'
import { router as apiRouter } from './network/index.js'

const PORT = process.env.PORT || 3003

const main = async () => {
  const app = express()
  app.use(morgan('dev'))
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  useRedis(app)
  ;(await dbConnection()).connect()
  app.use('/api', apiRouter)

  app.listen(PORT, () => console.log(`Obliterator running at port: ${PORT}.`))
}

main()
