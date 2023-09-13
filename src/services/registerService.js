import { user } from '../models/userModel.js'
import { encryptPassword } from '../helpers/handleBcrypt.js'

export const registerUser = async ({username, password, email}) => {
  try {
    const passwordHash = await encryptPassword(password)
    const newUser = new user({
      name: username,
      password: passwordHash,
      email: email
    })
    const savedUser = await newUser.save()
    return savedUser
  } catch (error) {
    throw new Error(error.message)
  }
}
