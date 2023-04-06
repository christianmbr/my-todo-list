import User from './model/userModel.js'

export async function sigup (newUser) {
  try {
    const { userNickName, userEmail, userName, userLastName, userPassword } = newUser
    const user = new User({
      userNickName,
      userEmail,
      userName,
      userLastName,
      userPassword: await User.hashPassword(userPassword)
    })

    return await user.save()
  } catch (error) {
    console.error(error.message)
  }
}

export async function sigin (user) {
  try {
    const { userNickName, userPassword } = user
    const userFound = await User.findOne({ userNickName })
    const passwordMatch = await User.comparePassword(userPassword, userFound.userPassword)

    if (!passwordMatch) { return }

    return userFound
  } catch (error) {
    console.error(error.message)
  }
}
