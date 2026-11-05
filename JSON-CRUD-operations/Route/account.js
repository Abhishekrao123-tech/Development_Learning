const express = require("express");
const accountRoutes = express.Router();
const fs = require("fs");
const path = require("path");

// 1. Define dataPath clearly
const dataPath = path.join(__dirname, "account.json");

// Helper function to read account data
const getAccountData = () => {
  try {
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, JSON.stringify({}));
    }
    const jsonData = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(jsonData);
  } catch (err) {
    console.error("Error reading file:", err);
    return {};
  }
};

// Helper function to save account data
const saveAccountData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// CREATE - POST /account/addaccount
accountRoutes.post("/account/addaccount", (req, res) => {
  const existAccounts = getAccountData();
  const newAccountId = Math.floor(100000 + Math.random() * 900000);

  existAccounts[newAccountId] = req.body;
  saveAccountData(existAccounts);

  res.status(201).send({
    success: true,
    msg: "Account data added successfully",
    id: newAccountId,
  });
});

// READ - GET /account/list
accountRoutes.get("/account/list", (req, res) => {
  const accounts = getAccountData();
  res.send(accounts);
});

// UPDATE - PUT /account/:id
accountRoutes.put("/account/:id", (req, res) => {
  const existAccounts = getAccountData();
  const accountId = req.params.id;

  if (!existAccounts[accountId]) {
    return res.status(404).send({ success: false, msg: "Account not found" });
  }

  existAccounts[accountId] = { ...existAccounts[accountId], ...req.body };
  saveAccountData(existAccounts);

  res.send({
    success: true,
    msg: `Account with id ${accountId} updated successfully.`,
  });
});

// DELETE - DELETE /account/delete/:id
accountRoutes.delete("/account/delete/:id", (req, res) => {
  const existAccounts = getAccountData();
  const userId = req.params.id;

  if (!existAccounts[userId]) {
    return res.status(404).send({ success: false, msg: "Account not found" });
  }

  delete existAccounts[userId];
  saveAccountData(existAccounts);

  res.send({
    success: true,
    msg: `Account with id ${userId} deleted successfully.`,
  });
});

module.exports = accountRoutes;
