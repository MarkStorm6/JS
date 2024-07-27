let pares = [
    [1, {name:"Samuel"}],
    [2, {name:"Miguel"}],
    [3, {name:"Sandra"}],
    [4, {name:"Felipe"}],
];

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



function tocoleccion(arr){
   let coleccion = [];
   for (idx in arr){
    let elemento = arr[idx];
    coleccion[idx] = elemento[1];
    coleccion[idx].id = elemento[0];
   }
   return coleccion;
}

let resultado = tocoleccion(pares);
console.log(resultado);