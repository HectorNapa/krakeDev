
validarPlaca= function(){
    let placa = recuperarTexto('txtNumPlaca');
    let erroresEstructura= validarEstructura(placa);
    if( erroresEstructura == null){
        mostrarTexto('lblResultado','ESTRUCTURA VALIDA');
    }else{
        mostrarTexto('lblResultado','ESTRUCTURA INCORRECTA');
        mostrarTexto('lblErrores',erroresEstructura);
    }
}