import {Router} from 'express'
import { createGasto } from '../controllers/gastoController'

const router = Router()

router.post("/", createGasto)

export default router 