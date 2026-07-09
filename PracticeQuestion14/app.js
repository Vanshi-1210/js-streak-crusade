

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3 -> Print, [7, 9, 0]

let Arr = [7, 9, 0, -2 ];
let n = 3;

let result = Arr.slice(0, n);

console.log(result); 

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3 -> Print, [9, 0, -2]

let Array=[ 7, 9 , 0 , -2];
let m = 3;
 
let output = Array.slice(-m);

console.log(output);

// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = "   "; 

if (str.trim().length === 0) {
    console.log("The string is blank.");
} else {
    console.log("The string is not blank.");
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let str = "   Hello World!   ";

let strippedStr = str.trim();

console.log(strippedStr);

// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let array=["Vanshika",89,"CSE(Aiml)",20];
console.log(array.includes("Vanshika"));
console.log(array.includes(30));




