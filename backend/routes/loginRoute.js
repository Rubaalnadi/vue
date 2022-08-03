const express = require("express");
const cheakLogin = require("../controllers/login");

const loginRouter = express.Router();

loginRouter.post("/", cheakLogin);

module.exports = loginRouter;
