const express = require("express")
const router = express.Router()
const authMiddleware = require("../../middlewares/authMiddleware")
const exploringFn = require("../../controllers/userSide-controlllers/exploring-controllers")
router.route("/").get(authMiddleware, exploringFn.exploreAll);
router.route("/:id").get(authMiddleware, exploringFn.exploreUserById);
// router.route("/explore/:id").get(authMiddleware,function)

module.exports = router