//custom middleware

const express = require("express");
const app = express();
const PORT = 8080;

// create middleware
const middleware1 = (req, res, next) => {
  console.log(1);
  next();
  console.log(2);
}
// app.use(middleware1);

const middleware2 = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
}
// app.use(middleware2);

// 1. timelogger middleware

const timelogger = (req, res, next) => {
  const StartTime =  Date.time();
  next();
  const EndTime = Date.time();

  console.log("time taken to process the request: ", EndTime - StartTime);
}

// app.use(timelogger);


// 2. requestlogger middleware

const requestlogger = (req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
}

app.use(requestlogger);


// 3. watchman middleware

const watchman = (req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  if (req.method === "GET") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}

// app.use(watchman);

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