let longitud = 6;
function array(n){
    if (n<=0){
        return[];
    }

    let arr = [];
    for (let i = 0; i < n; i++){
        arr[i] = i + 1;
    }

    return arr;
}

let resultado = array(longitud);
console.log(resultado);