const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 4000;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(expressLayouts)

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/recipeRoutes')
app.use('/', routes)

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
