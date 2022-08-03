const productSchema = require("../database/models/productSchema");
//addProduct
const addProducts = (req, res) => {
  const { img, price, name, smalldescription } = req.body;
  const add = new productSchema({
    img,
    price,
    name,
    smalldescription,
  });
  add
    .save()
    .then((response) => {
      res.status(201).json({
        success: true,
        message: `Success user created`,
        product: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: `server error`,
      });
    });
};
//allProduct
const getAllProducts = (req, res) => {
  productSchema
    .find({})
    .then((response) => {
      res.status(200).json({
        success: true,
        message: "all the products",
        product: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
      });
    });
};
//updateProductById
const updateProductById = (req, res) => {
  productSchema
  .findOneAndUpdate({_id : req.params.id},{
    ///? ||
    $set : {
      img : req.body.img || productSchema.img,
      price : req.body.price || productSchema .price,
      name : req.body.name || productSchema.name,
      smalldescription : req.body.smalldescription || productSchema.smalldescription
    }
  })
  .then((edit) => {
    res.status(200).json({
      success : true,
      message : `The article ⇾ ${req.params.id}`,
      product : edit
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
//deleteProductById 
const deleteProductById = ((req,res) => {
  let id =  req.params.id;
  productSchema
    .findByIdAndDelete(id)
    .then((delet) => {
      res.status(200).json({
        success : true,
        message : `The Product ⇾ ${id}`,
        product : delet
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        success : false,
        message : "The Product Not Found"
      })
    })
})
module.exports = {
  addProducts,
  getAllProducts,
  updateProductById,
  deleteProductById
};
