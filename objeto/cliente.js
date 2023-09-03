let clientes=[
    {cedula:'11111111', nombre:'Juan', edad: 20},
    {cedula:'22222222', nombre:'Mario', edad: 50},
    {cedula:'33333333', nombre:'Pepe', edad: 22},
];
//GUARDAR CAMBIOS MODIFICADOS
guardarCambio=function(){
    let valorCedula= recuperarTexto('txtCedula');
    let valorNombre= recuperarTexto('txtNombre');
    let valorEdad= recuperarTexto('txtEdad');
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad= valorEdad;
    modificarCliente(datosCliente);
    nostrarClientes();
}
//Modificar Cliente
modificarCliente= function(cliente){
    let clienteEncontrado= buscarClientes(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre= cliente.nombre;
        clienteEncontrado.edad= cliente.edad;  
    }
}
//Buscar cliente
ejecutarBusqueda=function(){
    let valorCedula= recuperarTexto('txtCedulaBusqueda');
    let cliente= buscarClientes(valorCedula);
    if(cliente == null){
        alert('cliente no encontrado');
    }else{
        mostrarTextoEnCaja('txtCedula',cliente.cedula);
        mostrarTextoEnCaja('txtNombre',cliente.nombre);
        mostrarTextoEnCaja('txtEdad',cliente.edad);
    }
}
//Crear cliente
crearCliente= function(){
    let valorCedula= recuperarTexto('txtCedula');
    let valorNombre= recuperarTexto('txtNombre');
    let valorEdad= recuperarTexto('txtEdad');
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad= valorEdad;
    agregarCliente(nuevoCliente);
}

agregarCliente= function(cliente){
    let resultado= buscarClientes(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
        alert('Cliente agregado');
        nostrarClientes();
    }else{
        alert('Ya existe el cliente con la cedula: '+ cliente.cedula);
    }
}
buscarClientes= function(cedula){
    let elementoCliente;
    let clienteEncontrado= null;
    for(let i=0; i< clientes.length;i++){
        elementoCliente= clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado= elementoCliente
            break;
        }
    }
    return clienteEncontrado;
}
//Mostrar cliente en tabla
nostrarClientes= function(){
    let cmpTabla= document.getElementById('tablaClientes');
    let contenidoTabla= '<table><tr>'+'<th>CEDULA</th>'+'<th>NOMBRE</th>'+'<th>EDAD</th>'+'</tr>';
    let elementoCliente;
    for(let i=0; i< clientes.length; i++){
        elementoCliente=clientes[i];
        contenidoTabla+='<tr><td>'+elementoCliente.cedula+'</td><td>'+elementoCliente.nombre+'</td><td>'+elementoCliente.edad+'</td></tr>';
    }
    contenidoTabla+='</table>'
    cmpTabla.innerHTML=contenidoTabla
}