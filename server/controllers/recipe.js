require("../config/database");
const Category = require("../models/category");

/**
 * GET /
 * Homepage
 */

exports.homePage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("index", { title: "Recipe Website - Home", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * Dummy Data Example - CategoryData
 */

async function insertDummyCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "Thai",
        image: "thai-food.jpg",
      },
      {
        name: "American",
        image: "american-food.jpg",
      },
      {
        name: "Chinese",
        image: "chinese-food.jpg",
      },
      {
        name: "Mexican",
        image: "mexican-food.jpg",
      },
      {
        name: "Indian",
        image: "indian-food.jpg",
      },
      {
        name: "Spanish",
        image: "spanish-food.jpg",
      },
    ]);
  } catch (error) {
    console.log("error", +error);
  }
}

/**
 * Dummy Data Example - RecipeData
 */

async function insertDummyRecipeData(){
  try {
    await Recipe.insertMany([
      {
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American",
        "image": "southern-friend-chicken.jpg"
      },
      {
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American",
        "image": "southern-friend-chicken.jpg"
      },
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

// insertDummyRecipeData();


// insertDummyCategoryData();
