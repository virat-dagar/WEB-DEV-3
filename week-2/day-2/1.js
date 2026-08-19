
// // 4. Crypto module
const crypto = require('crypto');

const key = 'mySecretKey';

const hash = crypto.createHash('sha256')
console.log(hash);

const data = hash.update(key);
console.log(data);

const ans = data.digest('hex');
console.log(ans);

// explain all the code snippets above and their uses in node.js

const ans1 = crypto.randomInt(1,7);
console.log(ans1)
