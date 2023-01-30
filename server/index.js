const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.body);
});

app.listen(3001, (req, res) => {
  console.log("시작");
});
