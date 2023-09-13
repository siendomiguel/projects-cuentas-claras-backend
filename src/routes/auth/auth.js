import {Router} from 'express'

export const authRouter = Router()

import { loginCtrl } from '../../controllers/auth.js'

authRouter
  .post('/', loginCtrl)
  .get('/', (req, res) => {
    res.json({message: 'Route Login Page'})
})
