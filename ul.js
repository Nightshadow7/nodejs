const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dude");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});