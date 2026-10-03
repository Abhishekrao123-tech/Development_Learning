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
// app.get("/", (req, res) => {
//   res.send("Hello Duniya");
// });
// app.get("/user", (req, res) => {
//   res.send("You are using User Route");
// });
// app.get("/admin", (req, res) => {
//   res.send("You are now using Admin Route");
// });

//routes
// app.get("/user/:userid", (req, res) => {
//   const userid = req.params.userid;
//   res.send(`user details for UserId  ${userid} are: .....`);
// });

// multiple routes
// app.get("/user/:userid/post/:postid", (req, res) => {
//   const userid = req.params.userid;
//   const postid = req.params.postid;
//   res.send(`User details for id ${userid} and post id ${postid} are:....`);
// });

//User Authentication Middleware
// const authenticate = (req, res, next) => {
//   const isAuthenticated = true; // Replace with actual authentication logic
//   if (isAuthenticated) {
//     next();
//   } else {
//     res.status(401).send("Unauthorized");
//   }
// };
// app.get("/profile", authenticate, (req, res) => {
//   res.send("Welcome to the Profile Page");
// });

// app.listen(3500, () => {
//   console.log("Server is running on port 3500");
// });

// Real world exmaple of middleware Authentication and Authorization
//Bearer Token Verification & Express Request Augmentation

const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.JWT_SECRET ||
      "4a8f9c12b7e3d8f501e2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
    (err, decodedUser) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }
      req.user = decodedUser;
      next();
    },
  );
};
app.get("/dashboard", authenticateJWT, (req, res) => {
  res.json({
    message: `Welcome back user ${req.user.id} username ${req.user.username}`,
  });
});
app.listen(3500, () => {
  console.log("Server is running on port 3500");
});

// this is a real test of an middleware authentication and authorization using jwt
// web token and using express request . It checks the Bearer token (with Captial B) in the request and verifies it
// using the secret key  and also throws an error if the token is expired
// using the VS code extension Thunder client to test the API
// ANd also created a geanerateToken.js file to generate a test JWT token for testing the API
// we can also use the .env file for it .
