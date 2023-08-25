jugar= function(seleccionado){
    let elemento= generarElemento();
    let ruta= generarRuta(elemento);
    mostrarImagen('imgPiePapTije', ruta);
    
    let ganador= determinarGanador(seleccionado,elemento);
    if(ganador == '0'){
        mostrarTexto('mensajeGanar','EMPATE');
   }else if(ganador == '1'){
        mostrarTexto('mensajeGanar','GANASTE LA PARTIDA!!');
   }else if(ganador == '2'){
        mostrarTexto('mensajeGanar','PERDISTE LA PARTIDA!!');
   }
}
