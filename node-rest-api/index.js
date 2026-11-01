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

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
