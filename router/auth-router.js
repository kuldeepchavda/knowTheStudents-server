const express = require("express");
const registrationData = require("../Models/user-Modal");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const contactRouter = require("../controllers/auth-controllers");
const validate = require("../validators/auth-validator");
const verifyingFunction = require("../middlewares/verifyMiddleware");
router.route("/").get(contactRouter.home);
router
  .route("/register")
  .post(verifyingFunction(validate), contactRouter.registration);
router.route("/login").post(contactRouter.login); // done
router.route("/user").get(authMiddleware, contactRouter.user);
module.exports = router;
