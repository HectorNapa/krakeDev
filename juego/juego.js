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
        if( puntoUsuarios == '5'){
            mostrarTexto('resultadoFinal','HAS GANADO EL JUEGO!!!');
        }
   }else if(ganador == '2'){
          puntoComputadora= puntoComputadora + 1;
          mostrarTexto('puntoComputa', puntoComputadora);
          mostrarTexto('mensajeGanar','PERDISTE LA PARTIDA!!');
          if(puntoComputadora == '5'){
            mostrarTexto('resultadoFinal','EL COMPUTADOR TE HA VENCIDO!!!');
          }
   }
}
limpiar= function(){
    mostrarTexto('puntoUsuario','0');
    mostrarTexto('puntoComputa', '0');
    mostrarTexto('mensajeGanar','');
    mostrarTexto('mensajeGanar','');
    mostrarTexto('resultadoFinal','');
    mostrarImagen('imgPiePapTije','');
}