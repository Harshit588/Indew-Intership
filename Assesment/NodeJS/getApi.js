const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("HOME PAGE");
});

app.get("/getUser", (req, res) => {
  const userArray = [
    {
      id: 1,
      name: "Harshit",
    },
    {
      id: 2,
      name: "Priyanshu",
    },
  ];

  res.json({
    message: "hello from server",
    status: true,
    data: userArray,
  });
});

app.listen(3000, () => console.log("Server Started"));
