const express = require("express");
// const reachedUsers = require("../Models/reachus-model");
const reachUsfn = require("../controllers/reached-controller")
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
router.route("/").post(authMiddleware,reachUsfn);

module.exports = router;
