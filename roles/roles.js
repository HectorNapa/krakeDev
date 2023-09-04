//Variables global
let esNuevo= false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0823445361",nombre:"Alberto",apellido:"Mendoza", sueldo:800.0}
]
//Mostrar divEmpleado y ocultar divRol y divResumen
mostrarOpcionEmpleado= function(){
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarComponente('divEmpleado');
    mostrarEmpleados();
    //Deshabilitar componentes
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
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
                mostrarTexto('lblErrorCedula','Deve ingresar todos digitos');
            }
        }  
    }else if(cedula==""){
        mostrarTexto('lblErrorCedula','Campo obligatorio*');
    }else{
        mostrarTexto('lblErrorCedula','Deve ingresar 10 digitos');
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
        }else{
            alert('YA EXITE UN EMPLEADO CON LA CEDULA '+cedula);
        }
    }
  }
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
                mostrarTexto(idComponente,'Deve ingresar todas mayusculas');
            }
        }
    }else if(palabra==""){
        mostrarTexto(idComponente,'Campo obligatorio*');
        
    }else{
        mostrarTexto(idComponente,'Deve ingresar al menos 3 caracteres');
    }
    return validar; 
}