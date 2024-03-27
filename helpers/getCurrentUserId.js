const jwt = require('jsonwebtoken')

const getCurrentUserId = (req) => {
  const header = req.headers['authorization']
  const token = header.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'temporary secret key');
    return `${decoded.id}`;
  } catch (error) {
    return error;
  }
}
module.exports = getCurrentUserId
