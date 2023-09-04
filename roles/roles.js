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
    let cedula= recuperarTexto('txtCedula');
    let empleado;
    for(let i=0; i<empleados.length; i++){
        empleado= empleados[i];
        if(empleado.cedula == cedula){
            esNuevo= false;
            break;
        }
    }
    esNuevo= true;
}