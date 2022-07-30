const mongoose = require("mongoose");
const rolesSchema = new  mongoose.Schema({
    role: { type: String, required: true , default : 'user' } ,//|| user defult mongoose 
  permissions: [{ type: String, required: true }],
})
module.exports = mongoose.model("role",rolesSchema);