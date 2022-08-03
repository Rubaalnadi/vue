const express = require("express");
const roleRouter = express.Router();
const {creatNewRole} = require("../controllers/role")

roleRouter.post('/',creatNewRole)
module.exports = roleRouter;