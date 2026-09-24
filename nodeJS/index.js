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
const fs = require("fs");
const buf = new Buffer(1024);
console.log("opening file");
fs.open("sample.txt", "r+", function (err, fd) {
  if (err) {
    return console.log(err);
  }
  console.log("The File is been Open Successfully");
  console.log("Reading File");

  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    //readFile throws an error so using read()
    if (err) {
      return console.log(err);
    }
    console.log(bytes + " bytes read");
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
