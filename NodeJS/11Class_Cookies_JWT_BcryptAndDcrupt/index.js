const express = require("express");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;

app.use(cookie());

app.get("/", (req, res) => {
  res.cookie("User", "Harshit Soni");
  res.send("Cookie Set is Done!");
});

app.get("/read", (req, res) => {
  res.send(req.cookies);
});

app.get("/clear", (req, res) => {
  res.cookie("User", "");
  res.send("LOGOUT");
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.send("DONE");
});

// BCRYPT
app.get("/password", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    const data = "harshit@12345";
    bcrypt.hash(data, salt, (err, hash) => {
      console.log(hash);
    });
  });
  res.end("DONE");
});

app.get("/verify", (req, res) => {
  bcrypt.compare(
    ".......",
    "$2b$10$hrtZKfOd94OICmKTwgKDCOuPTjLiwRI3nK2t2yQEGyA0xT3HYSeJa",
    (err, same) => {
      console.log(same);
      res.end("Done");
    }
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
