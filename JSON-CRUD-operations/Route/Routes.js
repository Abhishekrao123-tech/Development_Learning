const express = require("express");

const router = express.Router();
const fs = require("fs");

const sccountRoutes = require('./account.js');
router.use(accountRoutes);


module.exports = router;
