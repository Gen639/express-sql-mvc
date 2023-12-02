const db = require("../config/database.js");

const CreateController = {
  createDB(req, res) {
    const sql = "CREATE DATABASE IF NOT EXISTS endpointsDB";

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  },
  createTableCategories(req, res) {
    const sql = `
      CREATE TABLE IF NOT EXISTS categories (
          id INT AUTO_INCREMENT,
          category_name VARCHAR(255),
          PRIMARY KEY(id)
      )`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories table created");
    });
  },
  createTableProducts(req, res) {
    const sql = `
        CREATE TABLE IF NOT EXISTS products (
          id INT AUTO_INCREMENT,
          name VARCHAR(255),
          price DECIMAL(10,2),
          category_id INT,
          PRIMARY KEY(id),
          FOREIGN KEY(category_id) REFERENCES categories(id)
        )`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Products table created...");
    });
  },
};

module.exports = CreateController;
