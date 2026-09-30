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

// const authMiddleware = async(req,res,next) => {
//     try{
//       ... do something
//       next();
//     }
//     catch(err){
//       next(err);
//     }
// }
// const handler = (req,res) => {
//   ... handle the request
// }
// application.use('path',authMiddleware,handler)

// const loggerMiddleware = function
//   const loggerMiddleware = (req,res,next) => {
//     console.log('`[ ${new Date().toISOString()}]
//       ${req.method } ${req.url}`');
//       next();
//   };
//     }

//     app.use(loggerMiddleware)

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Duniya");
});
app.get("/user", (req, res) => {
  res.send("You are using User Route");
});
app.get("/admin", (req, res) => {
  res.send("You are now using Admin Route");
});

app.get("/user/:userid", (req, res) => {
  const userid = req.params.userid;
  res.send(`user details for UserId  ${userid} are: .....`);
});

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
