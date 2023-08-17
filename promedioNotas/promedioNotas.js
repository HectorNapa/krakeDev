calcularPromedioNotas= function(){
    let priNota= recuperarFloat ('txtPriNota');
    let segNOta= recuperarFloat('txtSegNota');
    let terNota= recuperarFloat('txtTercNota');
    let promedio= calcularPromedio(priNota, segNOta, terNota);
    let resultado= promedio.toFixed(2);
    mostrarTexto('lblPromedio','Su promedio es: '+ resultado);
    if(promedio > 7){
        mostrarImagen('imgImagen','./Imagenes/exito.gif');
    }else{
        mostrarImagen('imgImagen','./Imagenes/fracaso.gif')
    }
}