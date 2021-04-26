"use strict";

// TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!

// var stephenCharacteristics = ['tall', 'athletic', 'laidback'];
//
// console.log(stephenCharacteristics)

// TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

// var days = ['Monday', 'Tuesday', 'Wednesday'];
//
// var remDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
//
// remDays.forEach(function(day){
//
//     days.push(day)
//
// });
//
// console.log(days);

// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array


var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function weeks (arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        console.log(arr.length)
        var popped = arr.pop();
        console.log(arr.length)
        console.log(i)
        console.log(popped)
        newArr.unshift(popped)
        console.log(newArr)

    }
}