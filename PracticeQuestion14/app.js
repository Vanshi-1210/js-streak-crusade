// Qs6. Write a JavaScript program to check if an element exists in an array or not.

// let array=["Vanshika",89,"CSE(Aiml)",20];
// console.log(array.includes("Vanshika"));
// console.log(array.includes(30));

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3 -> Print, [7, 9, 0]

let array = [7, 9, 0, -2 ];
let n = 3;

let result = array.splice(0, n);

console.log(result); 