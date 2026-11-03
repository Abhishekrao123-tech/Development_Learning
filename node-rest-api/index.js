const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Correct route definition:
app.get("/status", (req, res) => {
  const status = {
    Status: "OK",
  };
  res.send(status);
});

app.get("/users", (req, res) => {
  const users = {
    Users: [
      {
        id: 1,
        name: "abhishek",
      },
    ],
  };
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
