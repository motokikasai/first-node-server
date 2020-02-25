const http = require("http");
const path = require("path");
const fs = require("fs").promises;

const server = http.createServer(async function(request, response) {
  let file = "Not found";
  let url = request.url;

  if (url === "/") {
    url = "index.html";
  }

  const filePath = path.join(__dirname, "public", url);
  console.log(filePath);

  try {
    file = await fs.readFile(filePath, {
      encoding: "utf-8"
    });
    response.writeHead(200);
  } catch (e) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    console.log(e);
  }

  response.end(file);
});

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});
