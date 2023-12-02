const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "your user",
  password: "your password",
  database: "endpointsDB",
});

db.connect();

module.export = db;
