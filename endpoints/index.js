const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql2");

const db = require("./config/database.js");

const PORT = 3000;

app.use(express.json());

//endpoint to create the DB
app.use("/create", require("./routes/create.js"));
// endpoint to create table categories
app.use("/create", require("./routes/create.js"));
//endpoint to create table products
app.get("/create", require("./routes/create.js"));

//endpoint to add new category
app.use("/Categories", require("./routes/categories.js"));
//endpoint to add new product
app.use("/Products", require("./routes/products.js"));
//endpoint to update a product by id
app.use("/Products", require("./routes/products.js"));
// endpoint to update the category
app.use("/Categories", require("./routes/categories.js"));
//endpoint to show all products
app.use("/Products", require("./routes/products.js"));
//endpoint to show all categories
app.use("Categories", require("./routes/categories.js"));
//endpoint to show all products with their categories
app.use("/Products/", require("./routes/products.js"));
// endpoint to get the product by ID
app.use("/Products", require("./routes/products.js"));
//endpoint to get all products in descendant order
app.use("/Products", require("./routes/products.js"));
//endpoint to get the category by id
app.use("/Categories", require("./routes/categories.js"));
//endpoint to get the product by name
app.use("/Products", require("./routes/products.js"));
// Delete product by ID
app.use("/Products", require("./routes/products.js"));

//listening the port
app.listen(PORT, () =>
  console.log(`This server is started at port http://localhost:${PORT}`)
);
