// Create a function that prints a poem to the console and call it.

function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}

printPoem();

// Create a function that takes a name as an argument and prints it to the console.

function printName(name){
    console.log(name);
}
printName("Vanshika");
printName("Kratika");
printName("Hardik");


// Create a function that takes two numbers as arguments and prints their sum.

function calSum(a, b){
    console.log("Sum of a and b is:",a+b);
}
calSum(80,45);

// Create a function that give us the average of three numbers.

function calAverage(a, b, c){
    let avg=(a+b+c)/3;
    console.log("Average of a, b and c is",avg);
}
calAverage(2,9,4);

// Create a function that prints the multiplication table of a number.

function mulTable(num){
    for(let i=1;i<=10;i++){
        console.log(num*i);
    }
}
mulTable(12);


// Create a function that returns the sum of all numbers from 1 to n.

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
       sum=sum+i;
    }
    return sum;
}
    console.log(getSum(5));


// Array of strings to be concatenated

 let str=["hii","hello","bye","!"];
function concat(str){

    let result="";

    for(let i=0; i<str.length;i++){
        result=result+str[i];
    }
    return result;
}
console.log(concat(str));





