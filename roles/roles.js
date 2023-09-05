//Variables global
let esNuevo= false;
let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALEZ",sueldo:900.0},
    {cedula:"0823445361",nombre:"ALBERTO",apellido:"MENDOZA", sueldo:800.0}
]
//Mostrar divEmpleado y ocultar divRol y divResumen
mostrarOpcionEmpleado= function(){
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarComponente('divEmpleado');
    mostrarEmpleados();
    bloqueoDeComponentes();
}
//Mostrar divRol  y ocultar  y divEmpleado divResumen
mostrarOpcionRol= function(){
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
    mostrarComponente('divRol');
}
//Mostrar divResumen y ocultar divRol y divEmpleado
mostrarOpcionResumen= function(){
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
    mostrarComponente('divResumen');
}
//Creación de la tabla de forma dinamica
mostrarEmpleados= function(){
    let cmpTablaEmpleado= document.getElementById('tablaEmpleados');
    let contenidoTabla='<table><tr>'+
    '<th>CEDULA</th>'+
    '<th>NOMBRE</th>'+
    '<th>APELLIDO</th>'+
    '<th>SUELDO</th>'+
    '</tr>';
    let empleado;
    for(let i=0; i< empleados.length; i++){
        empleado= empleados[i];
        contenidoTabla+='<tr><td>'+empleado.cedula+
        '</td><td>'+empleado.nombre+
        '</td><td>'+empleado.apellido+
        '</td><td>'+empleado.sueldo+
        '</td><tr>'
    }
    contenidoTabla+= '</table>';
    cmpTablaEmpleado.innerHTML= contenidoTabla;
}
ejecutarNuevo= function(){
    //Habilita los componentes
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
    esNuevo=true;
}
buscarEmpleado= function(cedula){
let empleadoEncontrado=null;
let empleado;
    for(let i=0; i<empleados.length; i++){
        empleado= empleados[i];
        if(empleado.cedula == cedula){
            empleadoEncontrado= empleado;
            break;
        }
    }
return empleadoEncontrado;
}
agregarEmpleado=function(empleado){
    let agregaEmpleado=false;
    let empleadoEncontrado= buscarEmpleado(empleado.cedula);
    if(empleadoEncontrado == null){
        empleados.push(empleado);
        agregaEmpleado= true;
    }
    return agregaEmpleado;
}
guardar= function(){
    let cedula=recuperarTexto('txtCedula');
    let nombre=recuperarTexto('txtNombre');
    let apellido=recuperarTexto('txtApellido');
    let sueldo=recuperarTexto('txtSueldo');
    let validaCedula= false;
    let validaNombre= false;
    let validaApellido=false;
    let validaSueldo=false;
    //Valida numero de cedula
    if(cedula.length == 10){
        let validaDigito;
        for(let i=0; i<cedula.length; i++){
            validaDigito= cedula.charCodeAt(i);
            if(validaDigito>=48 && validaDigito<=57){
                validaCedula=true;
            }else{
                mostrarTexto('lblErrorCedula','Debe ingresar todos digitos');
            }
        }  
    }else if(cedula==""){
        mostrarTexto('lblErrorCedula','Campo obligatorio*');
    }else{
        mostrarTexto('lblErrorCedula','Debe ingresar 10 digitos');
    }
    //Valida nombre y apellido
    validaNombre=validarPalabra(nombre,'lblErrorNombre');
    validaApellido=validarPalabra(apellido,'lblErrorApellido');
    //Valida sueldo
    if(sueldo !=""){
        let floatSueldo= parseFloat(sueldo);
        if(floatSueldo >=400 && floatSueldo<=5000){
            validaSueldo= true;
        }else{
            mostrarTexto('lblErrorSueldo','Ingrese monto entre 400 a 5000');
        }
    }else{
        mostrarTexto('lblErrorSueldo','Campo obligatorio*');
    }
  if(validaCedula==true && validaNombre==true && validaApellido==true && validaSueldo==true){
    if(esNuevo==true){
        let empleado={};
        empleado.cedula=cedula;
        empleado.nombre= nombre;
        empleado.apellido= apellido;
        empleado.sueldo= sueldo;
        let empleadoAgregado= agregarEmpleado(empleado);
        if(empleadoAgregado == true){
            alert('EMPLEADO GUARDADO CORRECTAMENTE');
            mostrarEmpleados();
            bloqueoDeComponentes();
            esNuevo= false;
        }else{
            alert('YA EXITE UN EMPLEADO CON LA CEDULA '+cedula);
            let existeEmpleado= buscarEmpleado(cedula);
            existeEmpleado.nombre= nombre;
            existeEmpleado.apellido= apellido;
            existeEmpleado.sueldo= sueldo;
            alert('EMPLEADO MODIFICADO EXITOSAMENTE');
            mostrarEmpleados();
            bloqueoDeComponentes();
        }
    }
  }
}
bloqueoDeComponentes= function(){
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}
//Valida nombre y apellido ingresados
validarPalabra= function(palabra, idComponente){
    let validar= false;
    if(palabra.length >= 3){
        let validaLetra;
        for(let i=0; i<palabra.length; i++){
            validaLetra= palabra.charCodeAt(i);
            if(validaLetra >=65 && validaLetra <=90){
                validar= true;
            }else{
                mostrarTexto(idComponente,'Debe ingresar todas mayusculas');
            }
        }
    }else if(palabra==""){
        mostrarTexto(idComponente,'Campo obligatorio*');
        
    }else{
        mostrarTexto(idComponente,'Debe ingresar al menos 3 caracteres');
    }
    return validar; 
}
ejecutarBusqueda= function(){
  let cedula= recuperarTexto('txtBusquedaCedula');
   let cedulaEncontrada= buscarEmpleado(cedula);
    if(cedulaEncontrada == null){
        alert('EMPLEADO NO EXISTE');
    }else{
        mostrarTextoEnCaja('txtCedula',cedulaEncontrada.cedula);
        mostrarTextoEnCaja('txtNombre',cedulaEncontrada.nombre);
        mostrarTextoEnCaja('txtApellido',cedulaEncontrada.apellido);
        mostrarTextoEnCaja('txtSueldo',cedulaEncontrada.sueldo);
        habilitarComponente('txtNombre');
        habilitarComponente('txtApellido');
        habilitarComponente('txtSueldo');
        deshabilitarComponente('txtCedula');
    }
}
limpiar= function(){
    mostrarTextoEnCaja('txtCedula','');
    mostrarTextoEnCaja('txtNombre','');
    mostrarTextoEnCaja('txtApellido','');
    mostrarTextoEnCaja('txtSueldo','');
    esNuevo= false;
    bloqueoDeComponentes();
}
buscarPorRol= function(){
   let cedulaIngr= recuperarTexto('txtBusquedaCedulaRol');
   let empleadoEncon= buscarEmpleado(cedulaIngr);
   if(empleadoEncon!=null){
        mostrarTexto("infoCedula",empleadoEncon.cedula);
        mostrarTexto("infoSueldo",empleadoEncon.sueldo);
        mostrarTexto("infoNombre",empleadoEncon.nombre+' '+empleadoEncon.apellido);
   }else{
    alert('EMPLEADO NO EXISTE');
   }
}
calcularAporteEmpleado= function(sueldo){
     let aporteEmpleado= (sueldo*9.45)/100;
     return aporteEmpleado;
}
calcularValorAPagar= function(sueldo,aporIESS,descuento){
    let valorPagar= sueldo- aporIESS- descuento;
    return valorPagar;
}
calcularRol= function(){
    let aporteEmpleado; 
    let valorPagar;  
    let sueldo= recuperarFloatDiv('infoSueldo');
    let descuento= recuperarFloat('txtDescuentos');
    if(descuento !=""){
        if(descuento >=0 && descuento <= sueldo){
            validaSueldo= true;
        }else{
            mostrarTexto('lblErrorDescuentos','Ingrese monto de descuemto');
        }
    }else{
        mostrarTexto('lblErrorDescuentos','Campo obligatorio*');
    }
    aporteEmpleado= calcularAporteEmpleado(sueldo);
    mostrarTexto('infoIESS',aporteEmpleado);
    valorPagar= calcularValorAPagar(sueldo, aporteEmpleado, descuento);
    mostrarTexto('infoPago',valorPagar);
}