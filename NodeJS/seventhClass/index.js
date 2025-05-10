const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/setCookie", (req, res) => {
  res.cookie("username", "Harshit");
  res.end("COOKIES SETTED");
});

app.get("/getCookie", (req, res) => {
  res.send("COOKIES ARE :: " + JSON.stringify(req.cookies));
});

app.get("/setSession", (req, res) => {
  req.session.username = "Soni";
  res.end("SESSION STARTED");
});

app.get("/getSession", (req, res) => {
  res.send("SESSIONS ARE :: " + JSON.stringify(req.session));
});

app.get("/logout", (req, res) => {
  res.cookie("username", "");
  res.end("COOKIES CLEARED");
});

app.get("/", (req, res) => {
  res.send("Hello World!:: ");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
