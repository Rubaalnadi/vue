const userSchema = require("../database/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Cheaklogin = (req, res) => {
  const password = req.body.password;
  userSchema
    .findOne({ email: req.body.email })
    .then(async (response) => {
      const valid = await bcrypt.compare(password, response.password);
      if (valid) {
        const payload = {
          userId: response._id,
          role: response.role,
        };

        const options = {
          expiresIn: "122134529385903257m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: "Valid login credentials",
          token: token,
          role : response.role,
          user_id : response._id
        });
      } else
        res.status(401).json({
          success: false,
          message: "Invalid login credentials",
        });

      //  }
    })
    .catch((err) => {
      res.status(401).json({
        success: false,
        message: "server error",
      });
    });
};
module.exports = Cheaklogin

// const userSchema = require("../database/models/userSchema");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // This function checks user login credentials
// const Cheaklogin = (req, res) => {
//   const password = req.body.password;
//   const email = req.body.email.toLowerCase();
//   userSchema
//     .findOne({ email })
//     .then(async (result) => {
//       if (!result) {
//         return res.status(404).json({
//           success: false,
//           message: `The email doesn't exist`,
//         });
//       }
//       try {
//         const valid = await bcrypt.compare(password, result.password);
//         if (!valid) {
//           return res.status(403).json({
//             success: false,
//             message: `The password you’ve entered is incorrect`,
//           });
//         }
//         const payload = {
//           userId: response._id,
//           role: response.role,
//         };

//         const options = {
//           expiresIn: "60939429203598m",
//         };
//         const token = await jwt.sign(payload, process.env.SECRET, options);
//         res.status(200).json({
//           success: true,
//           message: `Valid login credentials`,
//           token: token,
//           role : response.role,
//           user_id : response._id
//         });
//       } catch (error) {
//         throw new Error(error.message);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         success: false,
//         message: `Server Error`,
//       });
//     });
// };

// module.exports = {
//   Cheaklogin
// };
