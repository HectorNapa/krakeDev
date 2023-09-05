//Variables global
let esNuevo= false;
let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALEZ",sueldo:900.0},
    {cedula:"0823445361",nombre:"ALBERTO",apellido:"MENDOZA", sueldo:800.0}
];
let roles=[];
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
    deshabilitarComponente('btnGuardarRol');
    mostrarRoles();
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
    let descuento= recuperarTexto('txtDescuentos');
    if(descuento !=""){
        let valorFloat= parseFloat(descuento);
        if(valorFloat >=0 && valorFloat <= sueldo){
            aporteEmpleado= calcularAporteEmpleado(sueldo);
            mostrarTexto('infoIESS',aporteEmpleado);
            valorPagar= calcularValorAPagar(sueldo, aporteEmpleado, descuento);
            mostrarTexto('infoPago',valorPagar);
            habilitarComponente('btnGuardarRol');
        }else{
            mostrarTexto('lblErrorDescuentos','Ingresar descuento menor al sueldo');
        }
    }else{
        mostrarTexto('lblErrorDescuentos','Campo obligatorio*');
    }
}
buscarRol= function(cedula){
    let rolEncontrado= null;
    let encontrarRol;
    for(let i=0; i<roles.length;i++){
        encontrarRol= roles[i];
        if(encontrarRol.cedula == cedula){
            rolEncontrado= encontrarRol;
            break
        }
    }
    return rolEncontrado;
}
agregarRol= function(rol){
    let verificarRol= buscarRol(rol.cedula);
    if(verificarRol == null){
        roles.push(rol);
        alert('SE AGREGO EXITOSAMENTE');
        deshabilitarComponente('btnGuardarRol');
    }else{
        alert('YA EXISTE EL ROL');
    }
}
calcularAporteEmpleador= function(sueldo){
    let valorEmpleadorIESS=(sueldo*11.15)/100;
    return valorEmpleadorIESS;
}
guardarRol= function(){
    let cedulaR=recuperarTextoDiv('infoCedula');
    let nombreR=recuperarTextoDiv('infoNombre');
    let sueldoR=recuperarTextoDiv('infoSueldo');
    let aporteIESSr=recuperarTextoDiv('infoIESS');
    let valorPagarR=recuperarTextoDiv('infoPago');
    let aporteEmpleadorC=calcularAporteEmpleador(sueldoR);
    let rol={};
    rol.cedula= cedulaR;
    rol.nombre= nombreR;
    rol.sueldo= sueldoR;
    rol.valorAPagar=valorPagarR;
    rol.aporteEmpleado=aporteIESSr;
    rol.aporteEmpleador=aporteEmpleadorC;
    agregarRol(rol);
}
mostrarRoles= function(){
    let tablaResumenRol= document.getElementById('tablaResumen');
    let tabla='<table><tr>'+'<th>CEDULA</th>'+
                '<th>NOMBRE</th>'+
                '<th>SUELDO</th>'+
                '<th>VALOR A PAGAR</th>'+
                '<th>APORTE EMPLEADO</th>'+
                '<th>APORTE EMPLEADOR</th>'+
                '</tr>'
    let rol;
    for(let i=0; i< roles.length; i++){
        rol= roles[i];
        tabla+='<tr><td>'+rol.cedula+
        '</td><td>'+rol.nombre+
        '</td><td>'+rol.sueldo+
        '</td><td>'+rol.valorAPagar+
        '</td><td>'+rol.aporteEmpleado+
        '</td><td>'+rol.aporteEmpleador+
        '</td><tr>'
    }
    tabla+= '</table>';
    tablaResumenRol.innerHTML= tabla;
    mostrarTotales();
}
mostrarTotales= function(){
    let totalAPagar=0;
    let totalEmpleador=0;
    let totalEmpleado=0;
    let totalNomina;
    let rol;
    for(let i=0; i< roles.length;i++){
        rol= roles[i];
        totalAPagar+= parseFloat( rol.valorAPagar);
        totalEmpleado+= parseFloat(rol.aporteEmpleado);
        totalEmpleador+= parseFloat(rol.aporteEmpleador);
    }
    mostrarTexto('infoTotalPago',totalAPagar);
    mostrarTexto('infoAporteEmpresa',totalEmpleador);
    mostrarTexto('infoAporteEmpleado',totalEmpleado);
    totalNomina=  totalAPagar+ totalEmpleador+ totalEmpleado;
    mostrarTexto('infoTotalNomina',totalNomina);
}