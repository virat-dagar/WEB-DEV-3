one()
console.log('start');

function two() {
    console.log('error');
    let age = 10;
    console.log(three());
    console.log(age);
}

function three(){
    return 'hello developers'
}

console.log('mid');
console.log(two());
console.log('end');

function one() {
    console.log(name);
    var name = 'shrey';
    three()
    console.log(name);
}