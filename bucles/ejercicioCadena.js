ejecutarPrueba1= function(){
    let mensaje;
    mensaje=recuperarTexto('txtCadena');
    recorrerCadena(mensaje);
}
ejecutarPrueba2= function(){
    let mensaje;
    let mensInvertido;
    mensaje= recuperarTexto('txtCadena');
    mensInvertido=invertirCadena(mensaje);
    mostrarTexto('lblInvertido',mensInvertido);
}
recorrerCadena= function(cadena){  //recorrer cadena por medio de un un for.
    let caracter; 
    console.log('Primer For');
    for(let posicion=0; posicion < cadena.length; posicion++){
        caracter= cadena.charAt(posicion);
        console.log('Caracter '+caracter+' posicion '+posicion);
    }
    console.log('Segundo For');
    for(let posicion=0; posicion <= cadena.length-1; posicion++){
        caracter= cadena.charAt(posicion);
        console.log('CARACTER '+ caracter +' POSICIO '+ posicion);
    }
    
}
invertirCadena= function(cadena){
    let invertido='';
    for(let posicion= cadena.length-1; posicion >= 0; posicion--){
        caracter= cadena.charAt(posicion);
        invertido=invertido+ caracter;
    }
    return invertido;
}