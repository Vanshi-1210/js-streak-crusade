const favMovie="SecretSuperstar";

let guess=prompt("guess my favourite movie");

while((guess!=favMovie) && (guess!='quit')){

     guess=prompt("Wrong guess.please Guess Again");
}

if(guess==favMovie){
    console.log("Congrats!!");
}else{
    console.log("You quit")
}