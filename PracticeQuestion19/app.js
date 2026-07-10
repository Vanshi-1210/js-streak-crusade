//array
let fruits=["apple","mango","banana","litchi","orange"];
for(fruit of fruits){
    console.log(fruit);
}

//string
let str="apnacollege";
for(char of str){
    console.log(char);
}

//nested for__of
let heroes=[["superman","batman","Wonderwoman"],["spiderman","ironman","thor"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}