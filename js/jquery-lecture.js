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

//syntax - select by tag Name
$("h1")//... --> select by tagName
$("span").hide()

//syntax - selecting by id. Similar to selecting id in CSS. use --> #
$("#change-text")
$("#all-caps").hide()

//syntax - selecting by class. Similar to selecting class in CSS. use --> .
$(".lead")
$(".show-me").show()
//selecting children/parent/sibling elements
