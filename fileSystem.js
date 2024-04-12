// var http = require("http");
// var fs = require("fs");

/* http
  .createServer((request, response) => {
    fs.readFile("text.txt", (error, data) => {
      if (error) console.log(error);
      response.write(data);
      response.end();
    });
  })
  .listen(8000);
 */
/* 
http
  .createServer((request, response) => {
    fs.appendFile("text.txt", "kumar cc", (error, data) => {
      if (error) console.log(error);
      response.write(data);
      response.end();
    });
  })
  .listen(8000); */
// http
//   .createServer((request, response) => {
//     fs.appendFile("text.txt", "kumar cc", "utf8", (error, data) => {
//       if (error) console.log(error);
//       response.write(data);
//       response.end();
//     });
//   })
//   .listen(8000);

// to override a complete file content we use writeFile

/* http
  .createServer((request, response) => {
    fs.writeFile("text.txt", "kumar cc", (error, data) => {
      response.write(data);
      response.end();
    });
  })
  .listen(8001);
 */

// to create a new file  we use writeFile and
//the first argument should be new file name with extension and
//second argument will be data to be inserted in a new file and
//the last argument will be caller back function with two parameter error and data

// http
//   .createServer((request, response) => {
//     fs.writeFile("text1.txt", "kumar cc", (error, data) => {
//       response.write(data);
//       response.end();
//     });
//   })
//   .listen(8001);

// to delete a file we use unlink method which accept two arguments
// the first argument is file name
// the last argument is call back function
//which accept one parameter error ---> if the file not exit it throws error
// http
//   .createServer((request, response) => {
//     fs.unlink("text1.txt", (error) => {
//       if (error) throw console.log(error);
//       console.log("file deleted successfully..");
//     });
//   })
//   .listen(8002);
var http = require("http");
var fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.readFile("text.txt", "utf-8", function (err, data) {
//       res.write(data + " " + req.url.slice(req.url.indexOf("/") + 1));
//       res.end();
//       if (err) {
//         console.log(err);
//       }
//     });
//     console.log("server is running");
//   })
//   .listen(8002);

// http
//   .createServer((req, res) => {
//     fs.appendFile("text.txt", "bharath", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   })
// .listen(8002);
// http
//   .createServer((req, res) => {
//     fs.writeFile("text2.txt", "bharath", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(8002);
