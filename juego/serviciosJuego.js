obtenerAleatorio= function(){
    let valorAleatorio;
    let aleatorio= Math.random();
    let numAleatorio= aleatorio * 3;
    let numEntero= parseInt(numAleatorio);
    valorAleatorio= numEntero + 1;
    return valorAleatorio;
}
generarElemento= function(){
    let piedPapTijera;
    let numAleatorio= obtenerAleatorio();
    if(numAleatorio == '1'){
        piedPapTijera= 'PIEDRA';
    }else if(numAleatorio == '2'){
        piedPapTijera= 'PAPEL';
    }else if(numAleatorio == '3'){
        piedPapTijera= 'TIJERA';
    }
    return piedPapTijera;
}
determinarGanador= function(eleccionJugador1, eleccionJugador2){
    let resultado;
    if( eleccionJugador1 == eleccionJugador2){
            resultado= '0';
    }else if(eleccionJugador1 == 'PIEDRA' && eleccionJugador2 == 'TIJERA'){
            resultado= '1';
    }else if( eleccionJugador1 == 'PAPEL' && eleccionJugador2 == 'PIEDRA'){
            resultado= '1';
    }else if(eleccionJugador1 == 'TIJERA' && eleccionJugador2 == 'PAPEL'){
            resultado= '1';
    }else{
            resultado= '2';
    }
    return resultado;
}
generarRuta= function(nombre){
    let imagen;
    if(nombre == 'PIEDRA'){
        imagen='./imagenes/piedra.png'; 
    }else if( nombre == 'PAPEL'){
        imagen= './imagenes/papel.png';
    }else {
        imagen= './imagenes/tijera.png';
    }
    return imagen;
}