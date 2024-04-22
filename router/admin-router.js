const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin-Middleware");
const router = express.Router();
const userOperations = require("../controllers/adminController/adminUsersData");
const adminContactsData = require("../controllers/adminController/adminContactData");
// users data
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, userOperations.getAllUserData);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, userOperations.deleteUserData);
  // for updation of user
router.route("/users/databyid/:id").get(authMiddleware,adminMiddleware,userOperations.getUserById)
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, userOperations.upateUserdata);
  // contacted users
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminContactsData.getAllContactsData);
module.exports = router;
