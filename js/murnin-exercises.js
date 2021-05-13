"use strict"

// Write a function named cube(n) that returns n * n * n
// Write a function named cubeRoot(n) that returns the cube root of the input

// function cube(n){
//     return cube(n/n/m);
// }
//
// console.log(cube(n/n/n));

// Write a function called last(input) that returns the last character of a string

// function last(input){
//     return input.slice(-1);
// }
//
// console.log(last("Shots?"))

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// If either of the arguments are not a numeric string or number, return a string message indicating which argument is not a number/numeric string


// function remainder(x){
//     return remainder % x;
// }
//
// console.log(remainder(4))

let n = 5
let string = "";
for (let i = 1; i <= n; i++){
    for (let j = 0; j < i; j++){
        string += "*";
    }
    string += "\n";
}
console.log(string);