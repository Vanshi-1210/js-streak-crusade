const favMovie="SecretSuperstar";

let guess=prompt("guess my favourite movie");

while(guess!=favMovie){
    if(guess=="quit"){
        console.log("you quit")
        break;
    }
    
     guess=prompt("Wrong guess.please Guess Again");
}

if(guess==favMovie){
    console.log("Congrats!!");
}