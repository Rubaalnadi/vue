const express = require("express");
const orderRoute = express.Router();
const { addOrder,getAllOrder,deleteOrderById } = require("../controllers/order");
const authrization = require("../middleware/authrization");

orderRoute.post("/:id", authrization, addOrder);
orderRoute.get("/:id",getAllOrder)
orderRoute.delete("/:id", deleteOrderById);
module.exports = orderRoute;
