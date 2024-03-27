const models = require('../models/index');
const createToken = require('../helpers/createToken');

const register = async (req, res) => {
  try {
    const { firstName, middleName, lastName, age } = req.body;
    const user = await models.User.create({
      firstName,
      middleName,
      lastName,
      age
    });
    const token = await createToken(user.id);
    res.status(201).json({
      message: "Successfully registered.",
      success: true,
      token
    });
  } catch (error) {
    res.send(error)
  }
}
const logIn = (req, res) => {}
const update = (req, res) => {}
const logOut = (req, res) => {}
const deleteUser = (req, res) => {}

module.exports = {
  register,
  logIn,
  update,
  logOut,
  deleteUser,
}
