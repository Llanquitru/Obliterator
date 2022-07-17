import { Router } from 'express'
import {
  apipaymentMethodsRouter,
  apiPolygonsRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter,
  api3dProjectsRouter
} from './routes/index.js'

const router = Router()
const routers = [
  apipaymentMethodsRouter,
  apiPolygonsRouter,
  api3dProjectsRouter,
  api3dModelsRouter,
  apiAccountsRouter,
  apiUserRouter
]

routers.forEach(routerFn => routerFn(router))
router.get('/', (req, res) => res.send('en endpoint api'))

export { router }
