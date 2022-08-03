const  mongoose  = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName :{type:String , required : true},
    email : {type : String , required : true , unique : true},
    password : {type : String},
    role : { type: mongoose.Schema.Types.ObjectId,  ref: "role"},
})
userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });
module.exports = mongoose.model("user",userSchema)