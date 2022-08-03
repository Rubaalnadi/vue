const express = require("express");
const productRoute = express.Router();
const {addProducts,
        getAllProducts,
        updateProductById,
        deleteProductById} = require("../controllers/product");
productRoute.post("/",addProducts);
productRoute.get("/",getAllProducts);
productRoute.put("/update/:id",updateProductById)
productRoute.delete("/delet/:id",deleteProductById)
module.exports = productRoute;