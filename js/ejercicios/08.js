let array = [{
    id: 1,
    name: 'Samuel',
},{
    id: 2,
    name: 'Miguel',
},{
    id: 3,
    name: 'Sandra',
},{
    id: 4,
    name: 'Felipe',
}];

let pares = [
    [1, {id: 1 ,name:"Samuel"}],
    [2, {id: 2 ,name:"Miguel"}],
    [3, {id: 3 ,name:"Sandra"}],
    [4, {id: 4 ,name:"Felipe"}],
];

function topares(arr){
    let pares = [];
    for (idx in arr){
        let elemento = arr[idx]
        pares[idx] = [elemento.id, elemento]
    }

    return pares;
}

let resultado = topares(array);
console.log(resultado);