ejecutarValidacion= function(){
    let password= recuperarTexto('txtPassword');
    let validacion= validarPassword(password);
    if(validacion == ''){
        mostrarTexto('lblValidaciones','PASSWORD CORRECTO');
    }else{
        mostrarTexto('lblValidaciones',validacion);
    }
}
validarPassword= function(password){
    let letra;
    let letraMayu= false;
    let letraDigi= false;
    let letraCaraEsp= false;
    let mensaje='';
    if(validarClave(password)){  
    for(i= 0; i < password.length; i++){
        letra= password.charAt(i);
        if(esMayuscula(letra)){
            letraMayu= true;
        }
        if(esDigito(letra)){
            letraDigi= true;
        }
        if(esCaracterEpecial(letra)){
            letraCaraEsp= true;
        }
    }
    
    if(letraMayu == true){
       mensaje='';
    }else{
        mensaje= mensaje+'Debe haber al menos una mayuscula ';
    }
    if(letraDigi == true){
        mensaje='';
    }else{
        mensaje= mensaje+ 'Debe haber al menos un digito ';
    }
    if(letraCaraEsp == true){
        mensaje='';
    }else{
        mensaje=mensaje +'Debe haber al menos un caracter especial ';
    }
    }else{
        mensaje='Debe tener al menos de 8 a 16 caracteres';
    }
    return mensaje;
}
   