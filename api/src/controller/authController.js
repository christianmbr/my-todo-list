import * as userService from '../service/userService.js'

export async function sigUp (req, res) {
  try {
    const { userNickName, userEmail, userName, userLastName, userPassword } = req.body

    if (!(userNickName && userEmail && userName && userLastName && userPassword)) {
      return res.json({ message: 'Something went wrong' })
    }

    const token = await userService.sigup(req.body)
    if (!token) { return res.json({ status: 2, message: 'Something went wrong' }) }

    return res.json({ status: 1, message: 'Welcome', token })
  } catch (error) {
    return res.json({ status: 2, message: 'Error' })
  }
}

export async function sigIn (req, res) {
  try {
    const { userNickName, userPassword } = req.body

    if (!(userNickName && userPassword)) {
      return res.json({ message: 'Something went wrong' })
    }

    const token = await userService.sigin(req.body)
    if (!token) { return res.json({ status: 2, message: 'Something went wrong' }) }

    return res.json({ status: 1, message: 'Welcome back', token })
  } catch (error) {
    console.error(error.message)
  }
}
