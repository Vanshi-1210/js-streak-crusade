// Write an arrow function that returns the square of a number n ....

const square= n =>{
    return n*n;
}
console.log(square(8));

// write a function that prints "Hello World" 5 times at intervals of 2s Each ..

let count = 0;

let id = setInterval(() => {
    console.log("Hello World");
    count++;
    
    if (count === 5) {
        clearInterval(id);
    }
}, 2000);