"use scrtipt";

var result = 'x';
for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++){
        if (i == 0 && j > 0) {
            result += '[' + i + ']';
        }
        else if (j == 0 && i > 0){
            result += '[' + j + ']';
        }
        else if (i>0 && j>0){
            result += (i*j) + '';
    }
}
        result +='\n'
}
console.log(result)