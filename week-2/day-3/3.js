// // creating a server

// // step 1 -- import the http module
// const http = require("http");
// const fs = require("fs");

// // step 2 -- create a server
// const server = http.createServer((req,res)=>{
//     if (req.url=="/"){
//         res.end("Home Page");
//     } else if (req.url=="/about"){
//         res.end("<h1>About Page</h1>");
//     } else if (req.url=="/data"){
//         const data = fs.readFileSync("./3.json", "utf-8");
//         res.end(data);
//     } else {
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// });

// // step 3 -- listen to the server
// server.listen(8080, ()=>{
//     console.log("Server is running on port 8080");
// });




// web broser by default sends a GET request to the server when we enter a URL in the address bar. The server then processes the request and sends back a response, which is displayed in the browser.  it can not send a POST request to the server when we enter a URL in the address bar.  it can only send a GET request.  to send a POST request, we need to use a tool like Postman or write code to send a POST request using fetch or axios.

// creating a server

// step 1 -- import the http module
const http = require("http");
const fs = require("fs");

// step 2 -- create a server
const server = http.createServer((req,res)=>{
    if (req.url=="/"){
        res.end("Home Page");
    } else if (req.url=="/about" && req.method=="POST"){
        res.end("<h1>About Page</h1>");
    } else if (req.url=="/data" && req.method=="GET"){
        const data = fs.readFileSync("./3.json", "utf-8");
        res.end(data);
    } else {
        res.end("<h1>404 Page Not Found</h1>");
    }
});

// step 3 -- listen to the server
server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});
