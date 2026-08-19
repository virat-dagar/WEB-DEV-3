setInterval(() => {
    three()
}, 10000);

console.log('start');
function three(){
    console.log('hello developers')
}

setTimeout(() => {
    console.log(one());
}, 3000);

console.log('mid');
setTimeout(() => {
    console.log(two());
}, 0);

function one(){
    console.log('err');
    three();
    let name = 'love'
    console.log(name);
}

function two(){
    console.log(id);
    three();
    var id = 23
    return id;
}

console.log('end');