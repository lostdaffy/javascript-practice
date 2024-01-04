const score = 400
console.log(score);


const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));
console.log(balance.toString().length);

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));


/***************************************** Maths *******************************************/


console.log(Math.PI);
console.log(Math.floor(4.6));
console.log(Math.ceil(7.8));
console.log(Math.round(5.4));
console.log(Math.round(5.8));
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.sqrt(4));
console.log(Math.min(8, 4, 3, 4, 1, 0));
console.log(Math.max(8, 4, 3, 4, 1, 0));

console.log(Math.random());
console.log((Math.random() * 10));
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//My Experiment
let one = (Math.random() * 10)
console.log(one);
console.log((Math.floor(one + 1)) + 10);