const express = require("express");
const app = express();
const PORT = 8080;

// create middleware
const middleware1 = (req, res, next) => {
  console.log(1);
  next();
  console.log(2);
}

const middleware2 = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
}


app.use(middleware1);
app.use(middleware2);

app.get("/", (req, res) => {
    console.log('root page');
    res.send("Root page");
});


app.get("/home", (req, res) => {
    console.log('home page');
    res.send("Home page");
});


app.get("/about", (req, res) => {
    console.log('about page');
    res.send("about page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});