esMayuscula= function(caracter){
    let validar;
    let letra= caracter.charCodeAt(0);
    if(letra>=65 && letra <=90){
        validar= true;
    }else{
        validar=false;
    }
    return validar;
}
esDigito= function(caracter){
let validar;
let digito= caracter.charCodeAt(0);
if( digito >= 48 && digito <= 57){
    validar= true;
}else{
    validar= false;
}
return validar;
}
esGuion= function(caracter){
let validar;
let guion= caracter.charCodeAt(0);
if(guion == 45){
    validar= true;
}else{
    validar= false;
}
return validar;
}