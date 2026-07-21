// Write an arrow function that returns the square of a number n ....

const square= n =>{
    return n*n;
}
console.log(square(8));

// write a function that prints "Hello World" 5 times at intervals of 2s Each ..

let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran");
}, 10000);