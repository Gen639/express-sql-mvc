const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CatetegoriesController.js");

router.get("/", CategoryController.getAllCategories);

router.get("/id/:id", CategoryController.getCategoryById);

router.post("/", CategoryController.postCategory);

router.put("/id/:id", CategoryController.putCategoryById);

module.exports = router;
