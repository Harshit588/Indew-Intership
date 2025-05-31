const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");
const cookie = require("cookie-parser");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5501",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());

app.get("/", (req, res) => {
  res.redirect(
    "http://localhost:5501/NodeJS/Tasks/2_Login_SignUp_Api_MysqlDb/FrontEnd/login.html"
  );
});

app.use("/user", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
