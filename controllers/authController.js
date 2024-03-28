const models = require('../models/index')
const createToken = require('../helpers/createToken')
const getCurrentUserId = require('../helpers/getCurrentUserId')

const register = async (req, res) => {
  try {
    const { firstName, middleName, lastName, age, email, password } = req.body
    const user = await models.User.create({
      firstName,
      middleName,
      lastName,
      age,
      email,
      password,
    })
    const token = await createToken(user.id)
    res.status(201).json({
      message: 'Successfully registered.',
      success: true,
      token,
    })
  } catch (error) {
    res.send(error)
  }
}

const logIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await models.User.findAll({
      attributes: ['email', 'password'],
      where: {
        email: email,
      },
    })
    if (email) {
      if (user[0].dataValues.password == password) {
        res.status(200).json({
          message: 'Successfully log in.',
          success: true
        });
      }
      res.status(401).json({
        message: 'Failed to log in.',
        success: false,
      })
    }
  } catch (error) {
    return error
  }
}

const update = async (req, res) => {
  try {
    const id = getCurrentUserId(req, res)

    const { firstName, middleName, lastName, age } = req.body
    await models.User.update(
      { firstName, middleName, lastName, age },
      {
        where: {
          id,
        },
      },
    )
    res.status(200).json({
      message: 'Successfully updated.',
      success: true,
    })
  } catch (error) {
    res.send(error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = getCurrentUserId(req, res)
    await models.User.destroy({
      where: {
        id
      }
    });
    res.send("sakses");
  } catch (error) {
    res.send(error);
  }
}

const logOut = (req, res) => {
  // implement refresh tokens
}

module.exports = {
  register,
  logIn,
  update,
  logOut,
  deleteUser,
}
