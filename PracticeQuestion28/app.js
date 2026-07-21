// Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers....


let arrayAverage=nums=>{
    let sum=0;
 for(let i=0;i<nums.length;i++){
   sum=sum+nums[i];
 }
 let avg=sum/nums.length;
 return avg;
}
console.log(arrayAverage([5,3,4,8,5]));

// Qs2. Write an arrow function named isEven()that takes a single number as argument and returns if it is even or not....

const isEven=(n)=> (
    n%2==0
);

console.log(isEven(17));