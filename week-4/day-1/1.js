const express = require("express");
const fs = require("fs");

const app = express();

// APi/ Routes
app.get("/", (req, res) => {
  res.send({ msg: "Home Page" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "About Page" });
});

// /read route --> GET Method

app.get("/read", (req, res) => {
  // Logic

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  res.send(data);
});

// /read only student data route --> GET Method

app.get("/studentdata", (req, res) => {
  // Logic

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  res.send(data.student);
});

app.listen(8080, () => {
  console.log("server started at 8080");
});