/**
 * GET /
 * Homepage
 */

exports.homePage = async (req, res) => {
  res.render("index", { title: 'Recipe Website - Home'});
};
