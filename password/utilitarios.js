recuperarTexto= function(idComponente){
    let componente;
    let valorIngresado;
    componente= document.getElementById(idComponente);
    valorIngresado= componente.value;
    return valorIngresado;
}
recuperarInt= function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat= function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}
mostrarTexto= function(idComponente, mensaje){
    let componente;
    componente= document.getElementById(idComponente);
    componente.innerText= mensaje;
}
mostrarImagen= function(idComponente,rutaImagen){
    let componente;
    componente= document.getElementById(idComponente);
    componente.src= rutaImagen;
}
mostrarTextoEnCaja= function(idComponente, mensaje){
    let componente;
    componente= document.getElementById(idComponente);
    componente.value= mensaje;
}

validarClave= function(clave){
    let valida;
    let numCaracteres= clave.length;
    if(numCaracteres >= 8 && numCaracteres <= 16){
       valida= true;
    }else{
       valida= false;
    }  
     return valida;
}

esMayuscula= function(caracter){
    let valida;
    let letra= caracter.charCodeAt(0);
    if(letra >= 65 && letra <= 90 ){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}

esDigito= function(caracter){
    let valida;
    let digito= caracter.charCodeAt(0);
    if(digito >= 48 && digito <= 57){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
esCaracterEpecial= function(caracter){
    let valida;
    let caracterEspecial= caracter.charCodeAt(0);
    if(caracterEspecial == 42 || caracterEspecial == 45 || caracterEspecial == 95){
        valida= true;
    }else{
        valida= false
    }
    return valida;
}