import { Router } from 'express'

export const registerRouter = Router()

import { registerCtrl, getRegisterCtrl } from '../../controllers/auth.js'

registerRouter
  .post('/', registerCtrl)
  .get('/', getRegisterCtrl)
