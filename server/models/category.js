const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: "This field is requried",
  },
  image: {
    type: String,
    require: "This field is requried",
  },
});

module.exports = mongoose.model("Category", categorySchema);
