require("../config/database");
const Category = require("../models/category");

/**
 * GET /categories
 * Category
 */

exports.explore = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("category", { title: "Recipe Website - Category", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
