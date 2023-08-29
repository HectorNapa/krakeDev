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
//recorrer cadena y mostrarla invertidad
invertirCadena= function(cadena){
    let invertido='';
    for(let posicion= cadena.length-1; posicion >= 0; posicion--){
        caracter= cadena.charAt(posicion);
        invertido=invertido+ caracter;
    }
    return invertido;
}
// buscar una letra en una linea de caracteres por medio del recorrido del for
 buscarLetra= function(cadena, letra){
    let letraIterada;
    let existeLetra= false;
    for(let i = 0; i<cadena.length; i++){
        letraIterada= cadena.charAt(i);
        if(letraIterada == letra){
            existeLetra= true;
        }
        if(existeLetra== true){
            return true;
        }else{
            return false;
        }
    } 
 }
 // buscar una letra mayuscula en una linea de caractares por medio de la estructura For
 contarMayusculas= function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0; i< cadena.length; i++){
        letra= cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
        console.log(contadorMayusculas);
    }
 }