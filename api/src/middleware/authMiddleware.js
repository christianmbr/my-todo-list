import jwt from 'jsonwebtoken'

export async function authToken (req, res, next) {
  try {
    const headerToken = req.headers['x-access-token']
    if (!headerToken) { res.json({ message: 'No token provided' }) }

    const decode = jwt.verify(headerToken, process.env.SECRET)
    req.userId = decode.id

    next()
  } catch (error) {
    res.json({ status: 3, message: 'Invalid token', error: error.message })
  }
}
