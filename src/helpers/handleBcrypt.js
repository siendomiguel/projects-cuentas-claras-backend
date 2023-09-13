import bcrypt from 'bcryptjs'

export const encryptPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10)
  return hash
}

export const compare = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}