const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("Welcome to Express JS");
});
app.get("/about", (req, res) => {
  res.end("Welcome to about page");
});
app.get("/login", (req, res) => {
  res.end("Welcome to login page");
});

app.get("/data", (req, res) => {
  res.send("data fetch succesfully");
});

app.get("/students", (req, res) => {
  const data = fs.readFileSync("./krmu.json", "utf-8");

  const jsdata = JSON.parse(data);
  console.log(jsdata, typeof jsdata);
  res.send(jsdata.student);
});

app.get("/trainers", (req, res) => {
  const data = fs.readFileSync("./krmu.json", "utf-8");

  const jsdata = JSON.parse(data);
  console.log(jsdata, typeof jsdata);
  res.send(jsdata.trainer);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
})