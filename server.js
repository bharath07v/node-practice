// var http = require("http");

// http
//   .createServer((request, response) => {
//     response.write(request.url);
//     // response.write("hi bharath !!");
//     console.log("server is running");
//     response.end();
//   })
//   .listen(8000);
var http = require("http");
http
  .createServer((req, res) => {
    res.write(req.url);
    console.log("server is running");
    res.end();
  })
  .listen(8001);
