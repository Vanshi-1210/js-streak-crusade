let fruits=["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//nested loop with nested arrays.
let heroes=[["ironman","spiderman","thor"],["superman","wonderman","flash"]];
for(let i=0;i<heroes.length;i++){

    console.log(`list #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}
