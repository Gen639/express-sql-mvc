# Introduction

Express is a lightweight web framework written in JavaScript and hosted within the Node.js runtime environment. This module explains some of the key benefits of this framework, guides you on setting up your development environment, and demonstrates common tasks in web development and deployment.

## Project Objectives

- Manage Node.js
- Understand how to interact with Express.js
- Learn to handle Express.js
- Manage NPM
- Learn to use MySQL with Express

## 1.1. Endpoints

### Exercise 1

Create a database endpoint. Create the following tables using Express and MySQL, as covered in class:
- Table: Products
- Table: Categories
   * Remember, in the case of a many-to-many relationship, you'll need an intermediate table.

### Exercise 2

Create an endpoint to add a new product and add 2 new products using Postman.
Create an endpoint to create a category and add 2 new categories using Postman.

### Exercise 3

Create an endpoint to update a product.
Create an endpoint to update a category.

### Exercise 4

Create endpoints for:
- Displaying all products
- Displaying all categories
- Displaying all products with their categories
- Selecting a product by ID
- Displaying products in descending order
- Selecting a category by ID
- Searching for a product by name

### Exercise 5

Create an endpoint to delete a product by its ID.

## 1.2. MVC

Implement the MVC design pattern.

### Config Folder

Create a "config" folder.
Create a file "database.js" within the config folder containing database connection details.
Create another file "database.example.js" with the same content but without credentials. Do not upload "database.js" to your GitHub repository.

### Folder Structure

#### Products
- Create a "products.js" file inside a "routes" folder containing all product routes.
- Create a "ProductController.js" file containing all product actions.

#### Categories
- Create a "categories.js" file inside a "routes" folder containing all category routes.
- Create a "CategoryController.js" file containing all category actions.
