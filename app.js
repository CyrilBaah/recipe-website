const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 4000;
require("dotenv").config();
require('./server/config/database')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(expressLayouts)

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const indexRoute = require('./server/routes/recipe')
const categoryRoute = require('./server/routes/category')

app.use('/', indexRoute)
app.use(categoryRoute)



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
