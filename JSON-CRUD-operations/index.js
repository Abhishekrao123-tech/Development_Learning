const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1. Import router as 'routes' (or 'accountRoutes')
const routes = require("./Route/Routes");

// 2. Use the matching variable name 'routes'
app.use("/", routes);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});



// postman
// GET:  http://localhost:3000/account/list
// POST: http://localhost:3000/account/addaccount
// PUT:  http://localhost:3000/account/1232156(id to update)
// DELETE: http://localhost:3000/account/delete/1232516(id to delete)