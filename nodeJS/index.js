const http = require("http");
const host = "localhost";
const port = 8080; // can be also 5050 or 8000 etc...

const requestListner = function (req, res) {
  res.writeHead(200);
  res.end("My First Server !");
};

//server

const server = http.createServer(requestListner);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
