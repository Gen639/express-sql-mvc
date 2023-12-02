const express = require("express");
const router = express.Router();
const db = require("../config/database.js");
const CreateController = require("../controllers/CreateController.js");

router.get("/db", CreateController.createDB);

router.get("/TableCategories", CreateController.createTableCategories);

router.get("/TableProducts", CreateController.createTableProducts);

module.exports = router;
