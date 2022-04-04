const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe");

/**
 * Recipe Routes
 */

router.get("/", recipeController.homePage);
router.get("/recipe/:id", recipeController.getRecipe);


module.exports = router;
