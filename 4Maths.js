const balance = new Number(10000)
let minVal = Number.MIN_VALUE
let minVal2 = Number.MAX_VALUE

console.log(balance.toString()); // "100"
console.log(balance.toFixed(2));  // 100.00
console.log(balance.toPrecision(3));   // 1.00e+4 it actualy rounds off 
console.log(balance.toLocaleString('en-IN')); //it changes to  indian numbers system
console.log(minVal)
console.log(minVal2)

console.log("-------------------")

console.log(Math.abs(-4.2)); // changes to positive 
console.log(Math.round(-4.2)); // -4
console.log(Math.ceil(-4.2)); // -4

console.log(Math.floor(-4.2)); // -5
console.log(Math.min(4,2,7)); // 2
console.log(Math.max(4,2,7)); // 7


// for random number 

console.log(Math.floor(Math.random() * 10) + 1);


