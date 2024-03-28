const jwt = require('jsonwebtoken')

const authenticateUser = async (req, res, next) => {
  const header = req.headers['authorization']
  const token = header.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'temporary secret key')
    if (decoded) next()
  } catch (error) {
    res.send(error)
  }
}
module.exports = { authenticateUser }
