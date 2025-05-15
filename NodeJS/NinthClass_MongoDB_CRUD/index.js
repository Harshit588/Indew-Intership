const express = require("express");
const userModel = require("./userModel");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Harshit",
    UserName: "Harshit0777",
    Email: "Harshitarya0611@gmail.com",
  });
  res.send(user);
});

app.get("/update", async (req, res) => {
  let user = await userModel.findOneAndUpdate(
    { UserName: "Harshit0777" },
    { name: "Harshit Soni" },
    { new: true }
  );
  res.send(user);
});

app.get("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({
    UserName: "Harshit0777",
  });
  res.send(user);
});

app.get("/read", async (req, res) => {
  let user = await userModel.find();
  res.json(user);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
