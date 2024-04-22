const express = require("express");
const cors = require("cors");
const app = express();
const adminRouter = require("./router/admin-router")
const registrationRouter = require("./router/auth-router");
const contactRouter = require("./router/reached-router")
const exploringData = require("./router/userSide-Routes/exploring-router")
const connectDB = require("./dbConnect/dataBase");
const userFn = require("./router/userSide-Routes/dashboard-router")
const error_Middleware = require("./middlewares/error-middleware")
const corss = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}
app.use(cors(corss))
app.use(express.json());
app.use("/authorizations", registrationRouter);
app.use("/contact", contactRouter);
app.use("/admin",adminRouter);
app.use("/explore", exploringData);
app.use("/dashboard",userFn);
app.use(error_Middleware)
  
connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log("there was an error while connecting to the database", err);
  });
