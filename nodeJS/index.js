// const http = require("http");
// const host = "localhost";
// const port = 8080; // can be also 5050 or 8000 etc...

// const requestListner = function (req, res) {
//   res.writeHead(200);
//   res.end("My First Server !");
// };

// //server

// const server = http.createServer(requestListner);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

// Fs module

// const fs = require("fs");
// fs.readFile("sample.txt", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
// });

// OPEN

// fs.open(path,flags,mode,callback)

// const fs = require("fs");
// const { buffer } = require("stream/consumers");
// console.log("Opening File");
// fs.open("sample.txt","r+", function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The File is been Open Successfully");
// });

// READ
// fs.read(fd, buffer, offset, length, CaretPosition, callback);
// const fs = require("fs");
// const buf = new Buffer(1024);
// console.log("opening file");
// fs.open("sample.txt", "r+", function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The File is been Open Successfully");
//   console.log("Reading File");

//   fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//     //readFile throws an error so using read()
//     if (err) {
//       return console.log(err);
//     }
//     console.log(bytes + " bytes read");
//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString());
//     }
//   });
// });

// WRITE A FILE

// fs.writeFile(path, Data, options, callback);
// flag default = w
// const fs = require("fs");
// console.log("writing a File");
// fs.writeFile("sample.txt", "Hello World", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("data written successfully");
//   console.log("let's read new data from the file");

//   fs.readFile("sample.txt", function (err, data) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log("Asynchronous read:" + data.toString());
//   });
// });

// append sync file

// const fs = require("fs");
// const data = "node.js";  //Abhishek Rao
// fs.appendFileSync("sample.txt", data, "utf8");
// console.log("data is been appended to the file successfully");

// CLOSING A FILE
// const fs = require("fs");
// fs.close(fd, function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File Closed Successfully");
// });

// const fs = require("fs");

// fs.open("sample.txt", "r+", function (err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File Opened Successfully");

//   // Perform file operations (e.g., fs.read) here...

//   // Close the file INSIDE the callback where 'fd' is defined
//   fs.close(fd, function (err) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log("File Closed Successfully");
//   });
// });



//DELETING A FILE
// const fs = require("fs");
// console.log("Deleting a File");
// fs.unlink("sample.txt",function(err){
//   if(err){
//     return console.error(err);
//   }
//   console.log("File Deleting Successfully");

// })

