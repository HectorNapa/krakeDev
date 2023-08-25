let puntoUsuarios= 0;
let puntoComputadora= 0;
jugar= function(seleccionado){
    let puntosMensaje;
    let elemento= generarElemento();
    let ruta= generarRuta(elemento);
    mostrarImagen('imgPiePapTije', ruta);

    let ganador= determinarGanador(seleccionado,elemento);
    if(ganador == '0'){
        mostrarTexto('mensajeGanar','EMPATE');
   }else if(ganador == '1'){
        puntoUsuarios= puntoUsuarios + 1;
        mostrarTexto('puntoUsuario',puntoUsuarios);
        mostrarTexto('mensajeGanar','GANASTE LA PARTIDA!!');
   }else if(ganador == '2'){
          puntoComputadora= puntoComputadora + 1;
          mostrarTexto('puntoComputa', puntoComputadora);
          mostrarTexto('mensajeGanar','PERDISTE LA PARTIDA!!');
   }
}
