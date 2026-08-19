// step - 1.  // npm init -y
// step - 2. // npm i is-even[install is-even external module]
// step - 3. // import is-even module for usecase

const isEven = require("is-even");

// step - 4. // use

console.log(isEven(2));
console.log(isEven(3));

// using .env from process

const dotenv = require("dotenv");
dotenv.config();
const a = process.env.url;
const b = process.env.passkey;

console.log(a);
console.log(b);