const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/db.config");
dbConnect();
const app = express();
app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`..server up and running at port ${process.env.PORT}..`);
});
