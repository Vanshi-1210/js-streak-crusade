// Question1
// Qs1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
// let num=20;
// if(num%10===0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age):
// let name=prompt("Enter your name here");
// let age=prompt("Enter your age here");
// let output=`${name} is ${age} years old`;
// alert(output);

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]
// let Quarter=3;
// switch(Quarter){
//     case 1:
//         console.log("Months in Quarter 1:January,February,March");
//         break;
//     case 2:
//         console.log("Months in Quarter 2:April,May,June");
//         break;
//     case 3:
//         console.log("Months in Quarter 3:July,August,September");
//         break;
//     case 4:
//         console.log("Months in Quarter 4:October,November,December");
//         break;
// }

// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string print if it is golden or not.

let string="Amritsar";
if((string[0]=='a'||string[0]=='A')&& string.length>5){
    console.log("golden string");
}else{
        console.log("not a golden string")
    }



