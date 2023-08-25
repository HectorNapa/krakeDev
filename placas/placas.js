
validarPlaca= function(){
    let provincia;
    let mensajeProvincia;
    let tipoVehiculo;
    let diaPicoPlaca;
    let dia;
    let placa = recuperarTexto('txtNumPlaca');
    let erroresEstructura= validarEstructura(placa);
    if( erroresEstructura == null){
        mostrarTexto('lblResultado','ESTRUCTURA VALIDA');

        provincia= obtenerProvincia(placa);
        if(provincia==null){
            mostrarTexto('lblMensaje','PROVINCIA INCORRECTA');
        }else{
            mensajeProvincia= 'TU PLACA ES DE LA PROVINCIA DE: '+provincia;
            mostrarTexto('lblMensaje',mensajeProvincia);
        }

        tipoVehiculo= obtenerTipoVehiculo(placa);
        if(tipoVehiculo == null){
            mostrarTexto('lblTipoVehiculo','TIPO DE VEHICULO INCORRECTO');
        }else{
            mostrarTexto('lblTipoVehiculo',tipoVehiculo);
        }

       diaPicoPlaca= obtenerDiaPicoYPlaca(placa);
       dia='TU DIA PICO Y PLACA ES EL: '+diaPicoPlaca;
       mostrarTexto('lblDiaPicoPlaca',dia);

    }else{
        mostrarTexto('lblResultado','ESTRUCTURA INCORRECTA');
        mostrarTexto('lblMensaje',erroresEstructura);
    }
}