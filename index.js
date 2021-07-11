let express = require("express");

const server = express();

server.set("port", 3000);

server.listen(server.get("port"), () => {
  console.log(`Server connected on ${server.get("port")}🍖`);
});

server.get("/", (req, res) => {
  res.send("tasy treats🍖");
});
