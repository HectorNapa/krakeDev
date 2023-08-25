
validarPlaca= function(){
    let provincia;
    let placa = recuperarTexto('txtNumPlaca');
    let erroresEstructura= validarEstructura(placa);
    if( erroresEstructura == null){
        mostrarTexto('lblResultado','ESTRUCTURA VALIDA');
        provincia= obtenerProvincia(placa);
        console.log(provincia);
        if(provincia==null){
            mostrarTexto('lblMensaje','PROVINCIA INCORRECTA');
        }else{
            mostrarTexto('lblMensaje',provincia);
        }
    }else{
        mostrarTexto('lblResultado','ESTRUCTURA INCORRECTA');
        mostrarTexto('lblMensaje',erroresEstructura);
    }
}