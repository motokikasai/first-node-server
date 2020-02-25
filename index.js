const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  const file = fs.readFileSync("./public/index.html", { encoding: "utf8" });
  response.end(file);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
