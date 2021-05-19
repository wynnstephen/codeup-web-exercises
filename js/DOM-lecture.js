"use strict";

// TODO: print the following items to the console: 1) A node that
//  represents a div/item with a red border. 2) an array of elements
//  whose text is dark-green. 3) an array of all paragraph elements


//1.
let redBrd = document.getElementById("red-border");
console.log(redBrd);

//2.
let drkGrn = document.getElementsByClassName('drk-grn');
console.log(drkGrn);

//3.
let allPars = document.getElementsByTagName('p');
console.log(allPars)