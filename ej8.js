const aa = [9, 4, 8, 7, 3];

function even(num){
    return num % 2 === 0;
}


function cuantosCumplen(con, arr){
    array = arr.filter(element => (con(element) === true));
    return array.length;
}

console.log(cuantosCumplen (even, aa));
