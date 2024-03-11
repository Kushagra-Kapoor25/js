const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(2.3));

console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20

const value = Math.floor(Math.random() * (max - min + 1) + min) 
console.log(value);
