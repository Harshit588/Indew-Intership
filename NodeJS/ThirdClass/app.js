const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  app.send("<h1 style='text-align:center; color: Blue;'>HOME PAGE</h1>");
});

app.get("/Node", (req, res) => {
  res.statusCode = 200;
  res.end =
    "<h1 style='text-align:center; color: purple;'>WELCOME TO NODE PAGE</h1>";
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
