const router = require("express").Router();
const categoryController = require("../controller/categoryController");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

router.get("/category", categoryController.getCategories);
router.post("/category", auth, adminAuth, categoryController.createCategoty);

router.delete(
  "/category/:id",
  auth,
  adminAuth,
  categoryController.deleteCategory
);

router.put("/category/:id", auth, adminAuth, categoryController.updateCategory);

module.exports = router;
