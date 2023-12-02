const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductsController.js");

router.get("/", ProductController.getAllProducts);

router.get("/CategoryOfProducts", ProductController.getProductsWithCategory);

router.get("/id/:id", ProductController.getProductById);

router.get("/orderByDesc", ProductController.orderByDecs);

router.get("/name/:name", ProductController.getProductByName);

router.post("/", ProductController.postNewProduct);

router.put("/id/:id", ProductController.putProductById);

router.delete("/id/:id", ProductController.deleteProductById);

module.exports = router;
