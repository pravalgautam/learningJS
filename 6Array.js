const arr = [1,2,3,4,5,6,7] // can have difffernt values // resizable .. 
console.log(arr[3])



// shallow copy -- share same refrenece 
// deep copy  -- do not share reference

// method on arr 

console.log(arr.push(26)) // add at last

console.log(arr.unshift(20)) // addd at front
console.log(arr.shift()) // removes at front
console.log(arr.includes(2))
console.log(arr.indexOf(3))
console.log(arr.join());  // Output: "1,2,3"
console.log(arr.join("-"));  // Output: "1,2,3"



console.log(arr.slice(1,4));  // Output: "1,2,3" don not manipulte original array give s[2,3,4] do not include 4 here 

// console.log(arr)

console.log(arr.splice(1,4));  // Output: "1,2,3" includes end range also 



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const a = [1, 2, 3, 4, 5, 6, 7];
const b = [9, 10, 11, 23];

// console.log(a.push(b)); // gives 8 acts as b as 1 more element 


console.log(a)
// console.log(a[7][0]);  // 

// [ 1, 2, 3, 4, 5, 6, 7, [ 9, 10, 11, 23 ] ]
// 9

console.log(a.concat(b)) // add without nested array



const c = [...a,...b]
console.log("c",c);


const newArr = [12,33,33,[3,4,6],[10,90,21,4]]
console.log(newArr.flat(Infinity)) // flat gives new array 
Array.from("hitesh")

console.log(Array.from("hitesh")) // [ 'h', 'i', 't', 'e', 's', 'h' ]

const o = 100
const ol = 200
const ok = 300

console.log(Array.of(o,ol,ok)) // return array of all three  [ 100, 200, 300 ]