import {Router} from 'express'
import { createUser, getUserDNI, getUsers } from '../controllers/userController'

const router = Router()

router.post("/", createUser)
router.get("/", getUsers)
router.get("/:dni", getUserDNI)
export default router 