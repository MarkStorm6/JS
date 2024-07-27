function mayor(a,b){

    if (a>b){
        return a;

    }else{
        return b;
    }
    
    //otra manera:
    //return (a>b) ? a:b;
   
}

let mayores = mayor(4,5);
console.log(mayores);