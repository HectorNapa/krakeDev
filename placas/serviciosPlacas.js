
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
