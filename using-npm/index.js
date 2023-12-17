const http = require("http");
const bcryptjs = require("bcryptjs");
require("dotenv").config();

async function hashPassword(password) {
  const hash = await bcryptjs.hash(password, 10);

  return hash;
}

const server = http.createServer(async (req, res) => {
  res.write(await hashPassword("rahasia123"));
  res.end();
});

const port = process.env.PORT ?? 9000;

server.listen(port, () => {
  console.log("Server running on port:", port);
});
