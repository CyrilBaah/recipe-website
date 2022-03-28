const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe");

/**
 * Recipe Routes
 */

router.get("/", recipeController.homePage);

module.exports = router;
