function getbyidx(array, idx){
    if (idx < 0 || array.length <= idx){
        return 'elemento inexistente';
    }

    return array[idx];
}

let resultado = getbyidx([1,2,3], 3);
console.log(resultado);