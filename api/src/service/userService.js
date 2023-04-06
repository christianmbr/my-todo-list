import * as userDatabase from '../database/userDatabase.js'
import jwt from 'jsonwebtoken'
import env from 'dotenv'

env.config()

export async function sigup (newUser) {
  try {
    const userCreated = await userDatabase.sigup(newUser)
    if (!userCreated) { return }

    const newTokenForUser = jwt.sign({ id: userCreated._id }, process.env.SECRET, { expiresIn: '60m' })
    return newTokenForUser
  } catch (error) {
    console.error(error.message)
  }
}

export async function sigin (user) {
  try {
    const userFound = await userDatabase.sigin(user)
    if (!userFound) { return }

    const newTokenForUser = jwt.sign({ id: userFound._id }, process.env.SECRET, { expiresIn: '60m' })
    return newTokenForUser
  } catch (error) {
    console.error(error.message)
  }
}
