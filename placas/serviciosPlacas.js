validarEstructura = function (placa) {
    let longitudPlaca = placa.length;
    let mayuscula1;
    let validarMayu1;
    let mayuscula2;
    let validarMayu2;
    let mayuscula3;
    let validarMayu3;
    let guion;
    let validarGuion;
    let num5;
    let validarNum5;
    let num6;
    let validarNum6;
    let num7;
    let validarNum7
    let num8;
    let validarNum8;
    let resultado = null;
    // ------------------VALIDAR LONGITUD---------------------------
    if (longitudPlaca < 7 || longitudPlaca > 8) {
        resultado = resultado + ' La placa debe tener 7 u 8 caracteres, ';
    } else if (longitudPlaca == 8) {
        num8 = placa.charAt(7);
        validarNum8 = esDigito(num8);
        if (validarNum8 == false) {
            resultado = resultado + ' El octavo caracter dede ser un digito, ';
        }
    }
    // ------------------Validar MAYUSCULAS----------------------------
    mayuscula1 = placa.charAt(0);
    validarMayu1 = esMayuscula(mayuscula1);
    if (validarMayu1 == false) {
        resultado = resultado + ' El primer caracter dede ser una letra mayuscula, ';
    }
    mayuscula2 = placa.charAt(1);
    validarMayu2 = esMayuscula(mayuscula2);
    if (validarMayu2 == false) {
        resultado = resultado + ' El segundo caracter dede ser una letra mayuscula, ';
    }
    mayuscula3 = placa.charAt(2);
    validarMayu3 = esMayuscula(mayuscula3);
    if (validarMayu3 == false) {
        resultado = resultado + ' El tercer caracter dede ser una letra mayuscula, ';
    }
    // ----------------------Validar guion------------------------------
    guion = placa.charAt(3);
    validarGuion = esGuion(guion);
    if (validarGuion == false) {
        resultado = resultado + ' El cuarto caracter dede ser un guion, ';
    }
    // ----------------Validar DIGITOS-----------------------------
    num5 = placa.charAt(4);
    validarNum5 = esDigito(num5);
    if (validarNum5 == false) {
        resultado = resultado + ' El quinto caracter dede ser un digito, ';
    }
    num6 = placa.charAt(5);
    validarNum6 = esDigito(num6);
    if (validarNum6 == false) {
        resultado = resultado + ' El sexto caracter dede ser un digito, '
    }
    num7 = placa.charAt(6);
    validarNum7 = esDigito(num7);
    if (validarNum7 == false) {
        resultado = resultado + ' El septimo caracter dede ser un digito, '
    }
    return resultado;
}
obtenerProvincia= function(placa){
    let provincia;
    let primerLetra= placa.charAt(0);
    if(primerLetra =='A'){
        provincia= 'AZUAY';
    }else if(primerLetra == 'B'){
        provincia= 'BOLIVAR';
    }else if(primerLetra == 'U'){
        provincia= 'CAÑAR';
    }else if(primerLetra == 'C'){
        provincia= 'CARCHI';
    }else if(primerLetra == 'X'){
        provincia= 'COTOPAXI';
    }else if(primerLetra == 'H'){
        provincia= 'CHIMBORAZO';
    }else if(primerLetra == 'O'){
        provincia= 'EL ORO';
    }else if(primerLetra == 'E'){
        provincia= 'ESMERALDAS';
    }else if(primerLetra == 'W'){
        provincia= 'GALAPAGOS';
    }else if(primerLetra == 'G'){
        provincia= 'GUAYAS';
    }else if(primerLetra == 'I'){
        provincia= 'IMBABURA';
    }else if(primerLetra == 'L'){
        provincia= 'LOJA';
    }else if(primerLetra == 'R'){
        provincia= 'LOS RIOS';
    }else if(primerLetra == 'M'){
        provincia= 'MANABI';
    }else if(primerLetra == 'V'){
        provincia= 'MORONA SANTIAGO';
    }else if(primerLetra == 'N'){
        provincia= 'NAPO';
    }else if(primerLetra == 'S'){
        provincia= 'PASTAZA';
    }else if(primerLetra == 'P'){
        provincia= 'PICHINCHA';
    }else if(primerLetra == 'K'){
        provincia= 'SUCUMBIOS';
    }else if(primerLetra == 'Q'){
        provincia= 'ORELLANA';
    }else if(primerLetra == 'T'){
        provincia= 'TUNGURAHUA';
    }else if(primerLetra == 'Z'){
        provincia= 'ZAMORA CHINCHIPE';
    }else if(primerLetra == 'Y'){
        provincia= 'SANTA ELENA';
    }else{
        provincia= null;
    }
    return provincia;
}
obtenerTipoVehiculo= function(placa){
    let tipoVehiculo;
    let segundaLetra= placa.charAt(1);
    if(segundaLetra == 'A' || segundaLetra =='Z'){
        tipoVehiculo= 'Vehiculos comerciales (como taxis o autobuses)';
    }else if(segundaLetra == 'E'){
        tipoVehiculo= 'Vehiculos gubernamentales';
    }else if(segundaLetra == 'X'){
        tipoVehiculo= 'Vehiculos de uso oficial';
    }else if(segundaLetra == 'S'){
        tipoVehiculo= 'Vehiculos del gobierno provincial';
    }else if(segundaLetra == 'M'){
        tipoVehiculo= 'Vehiculos municipales';
    }else{
        tipoVehiculo= null;
    }
    return tipoVehiculo;
}
obtenerDiaPicoYPlaca=function(placa){
    let longitudPlaca= placa.length-1;
    let ultimoDigito= placa.charAt(longitudPlaca);
    let diaPicoPlaca;
    if(ultimoDigito =='1' || ultimoDigito == '2'){
        diaPicoPlaca= 'LUNES';
    }else if(ultimoDigito == '3' || ultimoDigito == '4'){
        diaPicoPlaca= 'MARTES';
    }else if(ultimoDigito == '5' || ultimoDigito == '6'){
        diaPicoPlaca= 'MIERCOLES';
    }else if( ultimoDigito == '7'|| ultimoDigito == '8'){
        diaPicoPlaca= 'JUEVES';
    }else if( ultimoDigito == '9'|| ultimoDigito == '0'){
        diaPicoPlaca= 'VIERNES';
    }
    return diaPicoPlaca;
}
