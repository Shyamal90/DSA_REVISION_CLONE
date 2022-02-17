const  express = require("express");

const app = express();

//Routes imports
const problems = require('./routes/product.routes');

app.use("",problems);

module.exports = app;