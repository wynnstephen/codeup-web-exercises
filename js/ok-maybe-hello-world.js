"use strict";

// alert("I swear I won't make you see 'hello world'");
//
// alert("i hope my dogs don't get out again :/ ");

// alert("love between us is\n" +
//     "\n" +
//     "speech and breath. loving you is\n" +
//     "\n" +
//     "a long river running.")

// CONFIRM

// var userChoice = confirm("Would you like to continue?");
//
//
// if (userChoice){
//     console.log("Let's continue");
// }else{
// console.log("Alright, be like that..");
// }

// PROMPT

var userInput = prompt( "What is your favorite movie?").toUpperCase();

if (userInput === "The Room".toUpperCase()){
    alert("oh, hi Mark.");
}else{
    alert("You chose:" + userInput);
}
alert(userInput);