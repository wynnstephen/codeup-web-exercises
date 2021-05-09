"use scrtipt";

// var result = 'x';
// for (var i = 0; i < 11; i++) {
//     for (var j = 0; j < 11; j++){
//         if (i == 0 && j > 0) {
//             result += '[' + i + ']';
//         }
//         else if (j == 0 && i > 0){
//             result += '[' + j + ']';
//         }
//         else if (i>0 && j>0){
//             result += (i*j) + '';
//     }
// }
//         result +='\n'
// }
// console.log(result)
//
//
// function showMultiplicationTable ()

// function showMultiplicationTable(num){
//     for (var i = i; i <= 10; i++){
//         console.log(num + "x" + i + " = " + (num * i));
//     }
// }
//
// console.log(showMultiplicationTable(7));

for (var i = 0; i < 10; i++){
    var random = Math.floor(Math.random() * (200 - 20)) + 20;

    if (random % 2 === 0){
        console.log(random + "is even");
    }else {
        console.log(random + "is odd");
    }
}

let numPyramid = function (start, end){
    for (let i = start; i <= end; i++);
    console.log(i.toString().repeat(i));
}


for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}