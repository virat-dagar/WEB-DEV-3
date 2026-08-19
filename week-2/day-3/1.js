// 6. Process module

const process = require("process")
// console.log(process, typeof process);

const userIp = process.argv;
console.log(userIp);

const ops = process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

function add(x,y){
    console.log(x+y);
}

function sub(x,y){
    console.log(x-y);
}

if (ops=="add"){
    add(a,b);
} else {
    sub(a,b);
}