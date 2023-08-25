
validarPlaca= function(){
    let provincia;
    let tipoVehiculo;
    let placa = recuperarTexto('txtNumPlaca');
    let erroresEstructura= validarEstructura(placa);
    if( erroresEstructura == null){
        mostrarTexto('lblResultado','ESTRUCTURA VALIDA');
        provincia= obtenerProvincia(placa);
        if(provincia==null){
            mostrarTexto('lblMensaje','PROVINCIA INCORRECTA');
        }else{
            mostrarTexto('lblMensaje',provincia);
        }
        tipoVehiculo= obtenerTipoVehiculo(placa);
        if(tipoVehiculo == null){
            mostrarTexto('lblTipoVehiculo','TIPO DE VEHICULO INCORRECTO');
        }else{
            mostrarTexto('lblTipoVehiculo',tipoVehiculo);
        }
    }else{
        mostrarTexto('lblResultado','ESTRUCTURA INCORRECTA');
        mostrarTexto('lblMensaje',erroresEstructura);
    }
}