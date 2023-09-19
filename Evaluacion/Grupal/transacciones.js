cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente('btDepositar');
    deshabilitarComponente('btRetirar');
    deshabilitarComponente('txtMonto');
}

ejecutarBusqueda=function(){
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    let cuentaIngresada= recuperarTexto('numeroCuenta');
    let resultadoCuenta= buscarCuenta(cuentaIngresada);
    if(resultadoCuenta != null){
        mostrarTabla(resultadoCuenta);
        habilitarComponente('btDepositar');
        habilitarComponente('btRetirar');
        habilitarComponente('txtMonto');
    }else{
        alert('CUENTA INEXISTENTE');
        deshabilitarComponente('btDepositar');
        deshabilitarComponente('btRetirar');
        deshabilitarComponente('txtMonto');
    }
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let resultadoCuenta= null;
    let cuenta;
    for(let i=0; i<cuentas.length; i++){
        cuenta= cuentas[i];
        if(cuenta.numeroCuenta == numeroCuenta){
            resultadoCuenta= cuenta;
            break;
        }
    }
    return resultadoCuenta;
}


ejecutarDeposito=function(){
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let cuentaIngresada= recuperarTexto('numeroCuenta');
    let montoIngresado= recuperarFloat('txtMonto');
    let deposito= depositar(cuentaIngresada, montoIngresado);
    mostrarTabla(deposito);
    alert('TRANSACCION EXITOSA!!');
    mostrarTextoEnCaja('txtMonto','');
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    cuentaAfectada= buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo += monto;
    return cuentaAfectada;
}
ejecutarRetiro= function(){
    let cuentaIngresada= recuperarTexto('numeroCuenta');
    let montoIngresado= recuperarFloat('txtMonto');
    retirar(cuentaIngresada,montoIngresado);
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
    cuentaAfectada= buscarCuenta(numeroCuenta);
    if(cuentaAfectada.saldo >= monto){
        cuentaAfectada.saldo-=monto;
        alert('TRANSACCION EXITOSA');
        mostrarTabla(cuentaAfectada);
        mostrarTextoEnCaja('txtMonto','');
    }else{
        alert('SALDO INSUFICIENTE');
        mostrarTextoEnCaja('txtMonto','');
    }

}
mostrarTabla= function(cuentaEncontrada){
    let cmpTabla= document.getElementById('mostrarCuenta');
        let tabla='<table><tr>'+
        '<th>N/CUENTA</th>'+
        '<th>CEDULA</th>'+
        '<th>NOMBRE APELLIDO</th>'+
        '<th>SALDO</th>'+
        '</tr>';
        tabla+= '<tr><td>'+cuentaEncontrada.numeroCuenta+'</td>'+
        '<td>'+cuentaEncontrada.cedula+'</td>'+
        '<td>'+cuentaEncontrada.nombre+' '+ cuentaEncontrada.apellido+'</td>'+
        '<td>'+cuentaEncontrada.saldo+'</td>'+
        '</tr>'
        tabla+= '</table>';
        cmpTabla.innerHTML= tabla;
}