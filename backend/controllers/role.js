const roleSchema = require("../database/models/roleSchema");

const creatNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const creatRole = new roleSchema({
    role,
    permissions,
  });
  creatRole.save()
  .then((response) => {
    res.status(201).json({
        success : true,
        message : "Success Created Role",
        role : response
    })
  })
  .catch((err) => {
    if(err.keyPattern){
        res.status(500).json({
          success : false,
           message : "server error"
        })
      }
  })
};
module.exports = {
    creatNewRole
}