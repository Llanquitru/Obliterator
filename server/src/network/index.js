import { Router } from 'express'
import {
  apiPaymentMethodsRouter,
  apiPolygonsRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter,
  api3dProjectsRouter
} from './routes/index.js'

const router = Router()
const routers = [
  apiPaymentMethodsRouter,
  apiPolygonsRouter,
  api3dProjectsRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter
]

routers.forEach(routerFn => routerFn(router))

export { router }
