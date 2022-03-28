require("../config/database");
const Category = require("../models/category");

/**
 * GET /
 * Homepage
 */

exports.homePage = async (req, res) => {
  res.render("index", { title: "Recipe Website - Home" });
};


/**
 * Dummy Data Example
*/

async function insertDymmyCategoryData(){
  try {
    await Category.insertMany([
      {
        "name": "Thai",
        "image": "thai-food.jpg"
      },
      {
        "name": "American",
        "image": "american-food.jpg"
      },
      {
        "name": "Chinese",
        "image": "chinese-food.jpg"
      },
      {
        "name": "Mexican",
        "image": "mexican-food.jpg"
      },
      {
        "name": "Indian",
        "image": "indian-food.jpg"
      },
      {
        "name": "Spanish",
        "image": "spanish-food.jpg"
      }
    ]);
  } catch (error) {
    console.log('error', + error)
  }
}

insertDymmyCategoryData();
