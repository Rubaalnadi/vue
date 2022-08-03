const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());
// Import Routers
const usersRouter = require("./routes/userRoute");
const roleRouter = require("./routes/roleRoute");
const productRoute = require("./routes/productRout");
const loginRouter = require("./routes/loginRoute");
const orderRouter = require("./routes/orderRoute")
// Routes Middleware
app.use("/users", usersRouter);
app.use("/role", roleRouter);
app.use("/product", productRoute);
app.use("/login", loginRouter);
app.use("/orders" , orderRouter)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
