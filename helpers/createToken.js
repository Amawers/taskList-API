const jwt = require('jsonwebtoken');

const duration = 3 * 24 * 60 * 60;

const createToken = async (id) => {
    return jwt.sign({ id }, 'temporary secret key', { expiresIn: duration });
}

module.exports = createToken;
