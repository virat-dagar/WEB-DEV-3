const http =require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/") {
        res.end("Home Page");
    } else if(req.url == "/add" && req.method=="POST") {

        // const data =req.body;
        // console.log(data);

        let str = "";

        // on-> method, data-> event
        req.on("data", (chunk) => {
            str += chunk;
        });

        req.on("end", () => {
            console.log(str);
        });

        res.end("Created Page");
      } else {
        res.end("Not Found");
    }
});

server.listen(8080, () => {
    console.log("server started");
});

a