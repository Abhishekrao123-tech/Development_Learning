const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello WOrld!!");
});
const port = 5000;
app.listen(port, () => {
  console.log(`Sever is Running on port ${port}`);
});
