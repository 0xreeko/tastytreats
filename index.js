const express = require("express");
const fs = require("fs");

const server = express();

server.set("port", 3001);
server.use(express.urlencoded());
server.use(express.json());

server
  .get("/", (req, res) => {
    console.log("tasty server works🍖, yum!");
  })
  .post("/", (req, res) => {
    let stream = fs.createWriteStream(`Inquiries/${req.body.name}-Inquiry.txt`);
    stream.once("open", function () {
      stream.write(`Name: ${req.body.name}\n`);
      stream.write(`Email: ${req.body.email}\n`);
      stream.write(`Message: ${req.body.message}\n`);
      stream.write(`Subscription: ${req.body.subscription ? "YES" : "NO"}\n`);
      stream.end();
    });
  });

server.listen(3000, () => {
  console.log(`Server connected on http://localhost:${server.get("port")} 🍖`);
});
