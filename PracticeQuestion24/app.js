// Create an object representing a car that stores the following properties for the car:name,model,color.Print the car’s name.

// const car={
//     name:"Maruti",
//     model:800,
//     color:"blue"
// }
// console.log(car.name);

//Create an object Person with their name,age and city.Edit their city’s original value to change it to “New York”.Add a new property country and set it to the United States.

const person={
    name:"Vanshika",
    age:20,
    city:"Aligarh",
}
person.city="New York";
person.country="United States";
console.log(person);

// Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].
let diceRoll=Math.floor(Math.random()*6)+1;
console.log(diceRoll);