const router = require("express").Router();
const productCtrl = require("../controller/productCtrl");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

router
  .route("/products")
  .get(productCtrl.getProducts)
  .post(productCtrl.createProduct);

router
  .route("/products/:id")
  .delete(productCtrl.deleteProduct)
  .put(productCtrl.updateProduct);

module.exports = router;
