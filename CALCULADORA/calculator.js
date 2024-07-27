let operacion = '';
let resultado = '';

function agregarNumero(num){
    resultado += num;
    document.getElementById('resultado').value = resultado;
}

function operador(op){
    operacion = op;
    resultado += op;
    document.getElementById('resultado').value = resultado;
}

function calcular(){
    let restar = eval(resultado);
    document.getElementById('resultado').value = restar;
    resultado = restar;
}

function borrar(){
    resultado = '';
    document.getElementById('resultado').value = resultado;
}

function borrarNumero() {
    let resultado = document.getElementById('resultado').value; // Obtiene el valor actual del input
    resultado = resultado.slice(0, -1); // Elimina el último carácter del resultado
    document.getElementById('resultado').value = resultado; // Actualiza el valor del input
}