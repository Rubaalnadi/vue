const userSchema = require("../database/models/userSchema");
const jwt = require("jsonwebtoken");
const createNewUser = (req, res) => {
  const { userName, email, password} = req.body;
  const user = new userSchema({
    userName,
    email,
    password,
    role:"61ddd88b5abc886c938dc621",//user
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Success user created`,
        user: result,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};


module.exports = {
  createNewUser,
}
