const a = 1; // never change
let b = 2; // can change
var c = 3; // can chnage do not use block scope and functional scope
d = 10

console.log(a);
console.log(b);
console.log(c);
console.log(d);


let p ;

console.log(p);

console.log(typeof null)
console.log(typeof undefined)


 {
  var name = "praval" /// it prints name becuse var works outside the block scope 
}
 {
  const name = "praval"
}


console.log(name)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



let score = "35"
console.log(score); // changes to int
console.log(typeof score);


let valueInInt = Number(score)
console.log(typeof valueInInt);


let n = "33abc"
console.log(n); // changes to int
console.log(typeof n); //// number

let valueInt = Number(n)

console.log(valueInt); // NaN
console.log(typeof valueInt); // number



let m = null
console.log(m);// null
console.log(typeof m);// object

