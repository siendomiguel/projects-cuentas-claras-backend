import { registerUser } from '../services/registerService.js'
import { loginUser } from '../services/loginService.js'

export const loginCtrl = async (req, res) => {
  try {
    const { email, password } = await req.body
    const user = await loginUser({ email, password })
    res.json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const registerCtrl = async (req, res) => {
  try {
    const { username, password, email } = await req.body
    const savedUser = await registerUser({ username, password, email })
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(501).json({ message: error.message })
  }
}

export const getRegisterCtrl = (req, res) => {
  res.json({ message: 'Route Register Page' })
}
