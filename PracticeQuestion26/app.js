// try & catch

console.log("hello");
console.log("hello");
console.log("hello");
try{
console.log(a);
}catch(err){
    console.log("caught an error.....a is not defined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// Arrow function 

// calculating sum
const sum=(a,b)=>{
    console.log(a+b);
}
sum(3,4);

// calculating cube
const cube=(n)=>{
  return n*n*n;
}
console.log(cube(3));


// calculating power 

const pow=(a,b)=>{
    return a**b;
}
console.log(pow(2,3));

// implicit return

const mul=(a,b)=>(
    a*b
);
console.log(mul(2,3));

//setTimeout
console.log("hi there!");
setTimeout(()=>{
    console.log("IEC College")
},10000)
console.log("Welcome to");


// set interval 
let id=setInterval(()=>{
    console.log("Apna college")
},4000);





