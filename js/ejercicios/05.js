let array = [8,9,7,15,-5,-60,5];

function getmenormayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getmenormayor(array);
console.log(numeros);