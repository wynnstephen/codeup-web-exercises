"use strict";

var selectOddNumber = prompt("Please enter an odd number between 1 - 50");

for (var i = 1; i < 50; i++){
    if(i == selectOddNumber){
        console.log("Yo! We need to skip this number: " + i);
    }
    if (i % 2 !== 0){
        console.log("Here is an odd number:" + i);
    }
}