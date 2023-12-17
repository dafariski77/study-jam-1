const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(500, { "Content-Type": "text/html" });
  res.write(req.url);
  res.write('<b>Hello world</b>');
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
