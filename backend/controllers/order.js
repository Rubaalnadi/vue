const productSchema = require("../database/models/productSchema");
const userSchema = require("../database/models/userSchema");
const orderSchema = require("../database/models/orderSchema");
const { json } = require("express");
const addOrder = (req, res) => {
  const product = req.body.productId.split(",");
  // console.log(typeof(product.split(",")))

    const user  = req.params.id;//61ddff245607f3a8ac72bbbf
    console.log(user)
    const order = new orderSchema({
        product,
        user
    }) 
    order
    .save()
  .then((orders) => {
      console.log(orders);
    res.status(201).json({
      success: true,
      message: "order created",
      order: orders,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  });
};
//get order //.populate??
const getAllOrder = (req, res) => {
  const user  = req.params.id;
  orderSchema.find({user}).populate("product","price")//
  .then((response) => {
    console.log(response);
  res.status(200).json({
    success: true,
    order: response,
  });
})
.catch((err) => {
    console.log(err);
  res.status(500).json({
    success: false,
    message: "Server Error",
  });
});
};
//deleteOrderById
const deleteOrderById = (req, res) => {
    let id =  req.params.id;
    orderSchema
      .findByIdAndDelete(id)
      .then((delet) => {
        res.status(200).json({
          success : true,
          message : `The order ⇾ ${id}`,
          order : delet
        })
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          success : false,
          message : "The Product Not Found"
        })
      })
};
module.exports = { addOrder ,getAllOrder,deleteOrderById};
