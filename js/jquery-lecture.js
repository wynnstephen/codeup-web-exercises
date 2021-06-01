"use strict";

// syntax
// let document = {
//     getElementById: function (){
//         console.log("find element with id of X")
//     }
// }
// document.getElementById()


// dollar sign - tapping into jQuery library
// selector - the element that you're selecting from the dom
//$("selector").methods)any arguments required);

// //syntax - select by tag Name
// $("h1")//... --> select by tagName
// $("span").hide()
//
// //syntax - selecting by id. Similar to selecting id in CSS. use --> #
// $("#change-text")
// $("#all-caps").hide()
//
// //syntax - selecting by class. Similar to selecting class in CSS. use --> .
// $(".lead")
// $(".show-me").show()
// //selecting children/parent/sibling elements

//TODO: add 3 images to your HTML page. give the element a pink background using jQuery. give the element an orange background using jQuery.
// Once the window has finished loading, hide the div with a pink background color. Once the DOM has finished loading hide the div with the orange background color.

$('img').css('width', '30%');
//$(`img`).css('background', 'pink');

// $('.pink').hide()
// $('.orange')

$('.pink').css('background', 'pink');
$('.orange').css('background', 'orange');

$('#p').hide()
$("button").click(function (){
    $("#o").load("demo_test.txt")
});























