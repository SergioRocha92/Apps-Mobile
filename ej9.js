const aa = [9, 4, 8, 7, 3];

function even(num){
    return num % 2 === 0;
}



function rechazar(con, arr){
    array = arr.filter(element => (con(element) === false));
    return array;
}

console.log(rechazar (even, aa));
