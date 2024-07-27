let array = [8,9,7,15,-5,-60,5];

function getmenormayor(arr){
    let cantidad = 0;
    for (elemento of arr){
        if (elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
}

let numeros = getmenormayor(array);
console.log(numeros);