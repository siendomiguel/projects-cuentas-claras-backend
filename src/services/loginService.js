import { user } from '../models/userModel.js'
import { compare } from '../helpers/handleBcrypt.js'


export const loginUser = async ({email, password}) => {
  try {
    const userByEmail = await user.findOne({email})
    const checkPassword = await compare(password, userByEmail.password)
    if(checkPassword){
      console.log(checkPassword)
      return userByEmail
    }
    if(!checkPassword){
      console.log(checkPassword)
      throw new Error('Password incorrecto')
    }
  } catch (error) {
    throw new Error(error)
  }
}
