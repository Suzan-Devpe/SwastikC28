const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// Get blogs router
const blogRouter = require("./blog");

// Re-route
router.route("/:userId/blogs", blogRouter);

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
