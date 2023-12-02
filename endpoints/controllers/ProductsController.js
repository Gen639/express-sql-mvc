const db = require("../config/database.js");

const ProductController = {
  getAllProducts(req, res) {
    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ message: "Get products", result });
    });
  },

  getProductsWithCategory(req, res) {
    const sql = `
    SELECT products.*, categories.category_name
    FROM products
    JOIN categories ON products.category_id = categories.id;`;
    db.query(sql, (err, result) => {
      res.send({ message: "Get all products with their categories", result });
    });
  },

  getProductById(req, res) {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log("result.lenght > 0");
        res.send({ message: "Get product by ID", result });
      } else {
        res.send("Product not found by that ID");
      }
    });
  },

  orderByDecs(req, res) {
    const sql = `SELECT * FROM products ORDER BY name DESC`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ message: "Get product in descendand order", result });
    });
  },

  getProductByName(req, res) {
    db.query(`SELECT * FROM products`, (err, products) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const filtredProducts = products.filter(
        (product) => product.name === req.params.name
      );
      console.log(filtredProducts);
      if (filtredProducts.length > 0) {
        res.send({ message: "Get product by name", filtredProducts });
      }
      res.send("No product found by that name");
    });
  },

  postNewProduct(req, res) {
    const sql = `INSERT INTO products (name, price, category_id) values ("${req.body.name}", "${req.body.price}", "${req.body.category_id}");`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product added...");
    });
  },

  putProductById(req, res) {
    const id = req.params.id;

    db.query(`SELECT * FROM products`, (err, products) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      console.log(products);
      console.log(`${id}`);

      const found = products.some((item) => item.id == id);
      console.log(found);

      if (found) {
        products.forEach((product) => {
          if (product.id === +id) {
            const sql = `UPDATE products SET 
            name = ?,
            price = ?,
            category_id = ?
            WHERE id = ?`;

            const values = [
              req.body.name || product.name,
              req.body.price || product.price,
              req.body.category_id || product.category_id,
              id,
            ];

            db.query(sql, values, (err, result) => {
              if (err) {
                console.error("Error updating product:", err);
                res.status(500).send("Error updating product");
                return;
              }
              console.log(result);
              res.send("Product changed...");
            });
          }
        });
      } else {
        res.status(400).send("El item no está encontrado");
      }
    });
  },
  deleteProductById(req, res) {
    const sql = `DELETE FROM products WHERE id = "${req.params.id}"`;

    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.affectedRows === 0) {
          res.send("No product found with that id");
        } else {
          res.send(`Product deleted by ID ${id}`);
        }
      }
    });
  },
};

module.exports = ProductController;
