const db = require("../config/database.js");

const CategoryController = {
  getAllCategories(req, res) {
    const sql = "SELECT * FROM categories";

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ message: "Get categories", result });
    });
  },
  getCategoryById(req, res) {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log("result.lenght > 0");
        res.send({ message: "Get category by ID", result });
      } else {
        res.send("Category not found by that ID");
      }
    });
  },
  postCategory(req, res) {
    const sql = `INSERT INTO categories (category_name)
    values ("${req.body.category_name}");`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("New category added...");
    });
  },
  putCategoryById(req, res) {
    const id = req.params.id;

    db.query(`SELECT * FROM categories`, (err, categories) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const found = categories.some((item) => item.id === +id);

      if (found) {
        categories.forEach((category) => {
          if (category.id === +id) {
            const sql = `UPDATE categories SET 
            category_name = ?
            WHERE id = ?`;

            const values = [
              req.body.category_name || category.category_name,
              id,
            ];

            db.query(sql, values, (err, result) => {
              if (err) {
                console.error("Error updating the category:", err);
                res.status(500).send("Error updating the category");
                return;
              }
              console.log(result);
              res.send("Category changed...");
            });
          }
        });
      } else {
        res.status(400).send("El item no está encontrado");
      }
    });
  },
};

module.exports = CategoryController;
