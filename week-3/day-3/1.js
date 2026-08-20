// step 1 -- npm init -y
// step 2 -- npm i express
// step 3 -- import express module for usecase

const express = require("express");

// step 4 -- use

const app = express();

app.get("/", (req, res) => {
  res.end("Welcome to Express JS");
});


app.get("/home", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});