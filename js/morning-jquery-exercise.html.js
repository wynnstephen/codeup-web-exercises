"use strict";

var button = document.getElementById('myButton');
var container = document.getElementById("post-container");

button.addEventListener('click', clickButton)

function clickButton(){
    function clickButton(e){
        e.preventDefault()
        let newContainer = createElement();

        styleElement(newContainer);