//short-circuit

//falso
//false
//0
//''
//null
//undefined
//NaN
let nombre = 'marcos';
let username=nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('hola');
    return false;
}

function fn2(){
    console.log('hello');
    return true;
}
 let x = fn1() && fn2();
