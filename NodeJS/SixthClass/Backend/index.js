const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("<h1>HOME PAGE</h1>"));

app.post("/insert", (req, res) => {
  const { subject, desc } = req.body;

  if (!subject || !desc) {
    return res
      .status(400)
      .json({ status: "Failure", message: "Missing subject or description" });
  }

  fs.appendFile(`./FilesOfUsers/${subject}.txt`, `${desc}\n`, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Failure", message: "File write error", error: err });
    }
    res.json({ status: "Success", message: "Data saved successfully" });
  });
});

app.get("/read", (req, res) => {
  fs.readdir("./FilesOfUsers", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ status: "Failure", resone: err });
    } else {
      res.status(200).json({ status: "Done", contain: data });
    }
  });
});

// Backend Route for POST request
app.post("/readDataAboutSubject", (req, res) => {
  const subject = req.body.sub; // Read the subject from the body
  const filePath = `./FilesOfUsers/${subject}`;

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ status: "Failure", reason: err });
    } else {
      const lines = data.split("\n");
      res.status(200).json({ status: "Done", contain: lines });
    }
  });
});

app.listen(port, () => console.log(`App Started on port ${port}!`));
