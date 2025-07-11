let myDate = new Date()


console.log(myDate) //2025-07-09T02:13:40.699Z
console.log(myDate.toString()) // Wed Jul 09 2025 07:44:07 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Wed Jul 09 2025
console.log(myDate.toLocaleDateString()) //7/9/2025


let myDate2 = new Date('2025.5.1');
console.log(myDate2.toLocaleDateString());


let timeS = new Date();             // Create a Date object
console.log(timeS.getMonth()); // 6
console.log(timeS.getDay());      // 3

