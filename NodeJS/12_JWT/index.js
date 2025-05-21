const express = require("express");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookie());

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "harshitarya0611@gmail.com" }, "xxx");
  res.cookie("Cookie", token);
  console.log(token);
  res.end("DONE");
});

app.get("/getCookie", (req, res) => {
  let data = jwt.verify(req.cookies.Cookie, "xxx");
  console.log(data);

  res.end(req.cookies.Cookie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
