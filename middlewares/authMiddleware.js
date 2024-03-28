const jwt = require('jsonwebtoken')
const models = require('../models/index')

const authenticateUser = async (req, res, next) => {
  const header = req.headers['authorization']
  const token = header.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'temporary secret key');
    const user = await models.User.findAll({
      where: {
        id: decoded.id,
      }
    })
    if (user) next();
  } catch (error) {
    res.send(error);
  }
}
module.exports = { authenticateUser }
