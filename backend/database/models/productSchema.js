const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    img : {type : String , required : true},
    price : {type : Number, required : true},
    name : {type: String , required : true},
    smalldescription: {type : String, required : true} 
})
module.exports = mongoose.model("product",productSchema); 