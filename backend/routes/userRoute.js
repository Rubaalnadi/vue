const express = require("express");
const { createNewUser } = require("../controllers/newUser");
const usersRouter = express.Router();

usersRouter.post("/",createNewUser)
module.exports = usersRouter;