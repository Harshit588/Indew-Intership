const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1 style='text-align:center; color: Blue;'>HOME PAGE</h1>");
});

app.post("/login", (req, res) => {
  const data = req.body;

  fs.writeFile(
    `./DataOfUsers/${data.name}.txt`,
    `Name :: ${data.name}\t, College :: ${data.Clg}\t, Company :: ${data.Company}`,
    (err) => {
      if (err) {
        res.statusCode = 500;
        res.end(
          "<h1 style='text-align:center; color: red;'>Failed to write file</h1>"
        );
      } else {
        fs.appendFile(
          "./DataOfUsers/AllUsersData.txt",
          `Name :: ${data.name}\t\t\t, College :: ${data.Clg}\t\t\t, Company :: ${data.Company}\n`,
          (err) => {
            if (err) {
              res.statusCode = 500;
              res.end(
                "<h1 style='text-align:center; color: red;'>Failed to write file</h1>"
              );
            } else {
              res.statusCode = 200;
              res.end(
                "<h1 style='text-align:center; color: green;'>File written successfully</h1>"
              );
            }
          }
        );
        res.statusCode = 200;
        res.end(
          "<h1 style='text-align: center; color: green;'>File written successfully</h1>"
        );
      }
    }
  );
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
