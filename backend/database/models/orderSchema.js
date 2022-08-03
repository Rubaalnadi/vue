const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = mongoose.model("order", orderSchema);
