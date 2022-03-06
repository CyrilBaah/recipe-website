const express = require("express");
const app = express();

require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
