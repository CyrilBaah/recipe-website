const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

/**
 * Category Routes
 */

router.get("/categories", categoryController.explore);

module.exports = router;

