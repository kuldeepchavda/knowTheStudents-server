const express = require("express")
const router = express.Router()
// const dashboardData = require("../../controllers")
const authMiddleware = require("../../middlewares/authMiddleware")
// app.use("/explore", exploringData);
// router.route("/").get(dashboardData);
module.exports = router