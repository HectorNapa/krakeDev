cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
   let cmpTabla= document.getElementById('mostrarTabla');
   let tabla='<table><tr>'+
                '<th> NUMERO DE CUENTA </th>'+
                '<th>NOMBRE</th>'+
                '<th>SALDO </th>'+
                '</tr>';
    let cuenta;
    for(let i=0; i<cuentas.length; i++){
        cuenta= cuentas[i];
        tabla+='<tr><td>'+
        cuenta.numeroCuenta+'</td><td>'+
        cuenta.nombre +' '+ cuenta.apellido+'</td><td>'+
        cuenta.saldo+'</td></tr>';
    }
   tabla+='</table>';
   cmpTabla.innerHTML=tabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuentaExistente= null;
    let cuenta;
    for(let i=0; i<cuentas.length;i++){
        cuenta= cuentas[i];
        if(cuenta.numeroCuenta == numeroCuenta){
            cuentaExistente= cuenta;
            break;
        }
    }
    return cuentaExistente;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let cuentaEncontrada=buscarCuenta(cuenta.numeroCuenta);
    if(cuentaEncontrada == null){
        cuentas.push(cuenta);
        console.log(cuenta);
        alert("CUENTA AGREGADA");
    }else{
        alert("CUENTA EXISTENTE");
    }
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let cedulaRecuperada=recuperarTexto('txtCedula');
    let numeroCunetaRecuperado=recuperarTexto('txtNumeroCuenta');
    let nombreRecuperado=recuperarTexto('txtNombre');
    let apellidoRecuperado=recuperarTexto('txtApellido');
    let cuenta={};
    cuenta.cedula=cedulaRecuperada;
    cuenta.numeroCuenta=numeroCunetaRecuperado;
    cuenta.nombre=nombreRecuperado;
    cuenta.apellido=apellidoRecuperado;
    cuenta.saldo=0;
    agregarCuenta(cuenta);
    mostrarCuentas();
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNumeroCuenta","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
}
