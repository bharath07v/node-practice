var url = require("url");
var address = url.parse(
  "http://localhost:8000/api/v1/users?contentType=application/json&callback",
  true
);
console.log(address);
console.log();
console.log(address.pathname);
console.log();
console.log(address.search);
