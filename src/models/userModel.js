import moongose from 'mongoose'
import { schemaUser } from '../schemas/schemaUser.js'

export const user = moongose.model('user', schemaUser)