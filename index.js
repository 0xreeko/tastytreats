const express = require("express");

const server = express();

server.set("port", 3000);

server.get("/", (req, res) => {
  res.send("tasty treats🍖");
});

server.listen(server.get("port"), (res) => {
  console.log(`Server connected on http://localhost:${server.get("port")} 🍖`);
});
