"use strict";

//I want a routine which will determine if a dog is in fact my dog
//The dog must have fur, have whiskers, and have a name

var hasFur = true;
var hasWhiskers = true;
var nameIsEevee = true;

var isMyDog;

if (hasFur && hasWhiskers && nameIsEevee){
    console.log("Who's a good grill? *bork *bork");
}

//LOGICAL or (||)

var creditScore = 720
var cashOnHand = 5000

if (creditScore > 680 || cashOnHand > 3000){
    console.log("Congrats! You (the bank) now own a car!");
}

var hasRequredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000);

var lengthOfEmployment = 6;

var hasAdequateLengthOfEmployment = (lengthOfEmployment >= 6);

if (hasRequredScoreOrCash && hasAdequateLengthOfEmployment){
    console.log("ok, for real. you get a car");
}

//Logical not (!)

console.log("the inverted value is: " + !true);