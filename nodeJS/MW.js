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