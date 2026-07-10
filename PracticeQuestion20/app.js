//Qs1. Print the factorial of a number n.

let n=prompt("enter number");
let fact=1;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log(fact);

//Qs2. finding the sum of digits in a number.

let num = 287155;
let numStr = num.toString(); 
let sum = 0; 

for (let i = 0; i < numStr.length; i++) {
    sum = sum + parseInt(numStr[i]); 
}

console.log(sum);


// Qs3. counting the no of digits in a number


let num=28715223445;
let numStr=num.toString();
let count=0;
for(let i=0;i<numStr.length;i++){
    count=count+1;
}
console.log(count);

//Qs4. Write a JS program to delete all occurrences of element 'num' in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr=[1, 2, 3, 4, 5, 6, 2, 3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);

//Qs.5 finding the largest number from the array.

let arr=[2,5,20,4,5,2,10];
let largest=0;
for(let i=0;i<arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);

