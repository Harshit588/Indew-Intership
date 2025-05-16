const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/user", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
