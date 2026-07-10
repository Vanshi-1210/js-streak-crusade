//Qs1. Print the factorial of a number n.

// let n=prompt("enter number");
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);

//Qs2. finding the sum of digits in a number.

let num = 287155;
let numStr = num.toString(); 
let sum = 0; 

for (let i = 0; i < numStr.length; i++) {
    sum = sum + parseInt(numStr[i]); 
}

console.log(sum);

