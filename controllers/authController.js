const models = require('../models/index')
const createToken = require('../helpers/createToken')
const getCurrentUserId = require('../helpers/getCurrentUserId')

const register = async (req, res) => {
  try {
    const { firstName, middleName, lastName, age } = req.body
    const user = await models.User.create({
      firstName,
      middleName,
      lastName,
      age,
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
const logIn = (req, res) => {}
const update = async (req, res) => {
  try {
    const id = getCurrentUserId(req, res)

    const { firstName, middleName, lastName, age } = req.body;
    await models.User.update(
      { firstName, middleName, lastName, age },{
        where: {
          id
        },
      },
    );
    res.status(200).json({
      "message": "Successfully updated.",
      "success": true
    });
  } catch (error) {
    res.send(error)
  }
}
const logOut = (req, res) => {}
const deleteUser = (req, res) => {}

module.exports = {
  register,
  logIn,
  update,
  logOut,
  deleteUser,
}
