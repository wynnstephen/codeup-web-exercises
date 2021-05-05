"use strict";

// Write a function called getSquare. It should take in one input and return the square (not square root) of that input as a number.
//     If the input is not a number or numeric string, getSquare should return false.

function getSquare(input){
    return input * input
    if (!(input !== ''))
    return false;
}

console.log(getSquare());

// Write a function called getReverse. It should take in one input and return the same string, in reverse.
//     If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.

function getReverse(input) {
    if (input === "")
        return "";
    else
        return getReverse(input.substr(1)) + input.charAt(0);
}

console.log(getReverse("45"))

// Write a function called multiplySquares(). It should take in two inputs, square each input, then return the product of mulitplying them together.
//     If the input is not a number (5) or numeric string ("5"), the method should return false

function multiplySquares(input1, input2){
    var num = Math.pow(input1, input2);
    return input1 * input2;
}

console.log(multiplySquares())

// Write a function called addTo. It should take in one input and return the result of adding 3 to that input.
//     If the input is not a number or numeric string, addTo should return false

function addTo(input){
    return input + 3;
}

console.log(addTo(0))

// Write a function called subtractFrom. It should take in one input and return the result of subtracting 3 from that input.
//     If the input is not a number or numeric string, subtractFrom should return false.

function subtractFrom(input){
    return input - 3;
}

console.log(subtractFrom(NaN))

// Write a function called getLowestNumber. It should take in three inputs and determine which input is the lowest number.
//     If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false

function getLowestNumber(input1, input2, input3){
    return Math.min(input1, input2, input3)
}

console.log(getLowestNumber(1,2,3))

// Write a function called isAString. It should take in one input and return true if the input is a string.
// If the input is not a string, then return false

function isAString(input){
    if (input === "");
    return input = true;
}

console.log(isAString(3))
