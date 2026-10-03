const jwt = require("jsonwebtoken");

const secretKey =
  process.env.JWT_SECRET ||
  "4a8f9c12b7e3d8f501e2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4";

const payload = { id: 153, username: "Abhishek Rao" };

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Test JWT Token:\n");
console.log(token);
