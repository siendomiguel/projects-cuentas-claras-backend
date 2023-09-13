import { Router } from 'express'
import { authRouter } from './auth/auth.js'
import { registerRouter } from './auth/register.js'

export const router = Router()

router.use('/login', authRouter)
router.use('/register', registerRouter)