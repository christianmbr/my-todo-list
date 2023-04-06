import { Router } from 'express'
import * as userController from '../../controller/authController.js'

const authRouter = Router()

authRouter.post('/sigin', userController.sigIn)
authRouter.post('/sigup', userController.sigUp)

export default authRouter
