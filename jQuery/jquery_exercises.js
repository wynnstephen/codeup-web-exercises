"use strict";

$("#lagoon").click(function (){
    $('#lagoon').css('background-color', '#FF0');
})

$('p').dblclick(function (){
    $('p').css('font-size', '18px');
})

$('li').hover(
    function () {
        $('li').css('background-color', 'red');
    },
    function () {
        $('li').css('background-color', 'black');
    }
);