// hello world 
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hello World!!!!!!!!!!!!");
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

// it prints the output in port 3000 which is http://localhost:3000



const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res,next) => {
  res.send("hello World!!!!!!!!!!!!");
  next();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});