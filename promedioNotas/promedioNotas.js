calcularPromedioNotas= function(){
    let priNota= recuperarFloat ('txtPriNota');
    let segNOta= recuperarFloat('txtSegNota');
    let terNota= recuperarFloat('txtTercNota');
    let promedio= calcularPromedio(priNota, segNOta, terNota);
    let resultado= promedio.toFixed(2);
    mostrarTexto('lblPromedio','Su promedio es: '+ resultado);
    if(promedio < 5 && promedio > 0 ){
        mostrarImagen('imgImagen','./Imagenes/fracaso.gif');
        mostrarTexto('lblResultado','REPROBADO !!!')
    }else if(promedio >= 5 && promedio <= 8 ){
        mostrarImagen('imgImagen','./Imagenes/exito.gif')
        mostrarTexto('lblResultado','BUEN TRABAJO!!!')
    }else if(promedio > 8 && promedio <=10 ){
        mostrarImagen('imgImagen','./Imagenes/exelente.gif')
        mostrarTexto('lblResultado','EXELENTE!!!')
    }else{
        mostrarImagen('imgImagen','./Imagenes/incorrecto.gif')
        mostrarTexto('lblResultado','DATOS INCORRECTOS!!!')
    }
    
}