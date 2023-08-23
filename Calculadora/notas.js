calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}
//Primera solucion condicional en cascadas
calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
     if(isNaN(nota1)){
        alert('ERROR');
     }else{
        nota2 = recuperarFloat("txtNota2");
        if(isNaN(nota2)){
            alert('ERROS');
        }else{
            nota3 = recuperarFloat("txtNota3");
            if(isNaN(nota3)){
                alert('ERROR');
            }else{
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }
     }
}
//Segunda solucion mas entendible :)
calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError= false;
    nota1 = recuperarFloat("txtNota1");
    if(isNaN(nota1)){
        existeError= true;
        mostrarTexto('lblError1','DEBE INGRESAR UN NUMERO');
    }else{
        mostrarTexto('lblError1','');
    }
    nota2 = recuperarFloat("txtNota2");
    if(isNaN(nota2)){
        existeError= true;
        mostrarTexto('lblError2','DEBE INGRESAR UN NUMERO');
    }else{
        mostrarTexto('lblError2','');
    }
    nota3 = recuperarFloat("txtNota3");
    if(isNaN(nota3)){
        existeError= true;
        mostrarTexto('lblError3','DEBE INGRESAR UN NUMERO');
    }else{
        mostrarTexto('lblError3','');
    }
    if(existeError == false){
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
    
}
//tercera solucion funcion
calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    if(esNotaValida(nota1,'lblError1') & esNotaValida(nota2,'lblError2') & esNotaValida(nota3,'lblError3')){
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }else{
        mostrarTexto("lblResultado",'');
    }
}
esNotaValida= function(nota, idComponenteError){
    let hayErrores= false;
    if(isNaN(nota)){
        mostrarTexto(idComponenteError, 'DEBE INGRESAR UN NUMERO');
        hayErrores=true;
    }
    if(nota < 0 || nota>10){
        mostrarTexto(idComponenteError, 'EL NUMERO DEBE ESTAR ENTRE 0 Y 10'); 
        hayErrores= true;
        }
        if( hayErrores == false){
            mostrarTexto(idComponenteError,'');
        }   
        return !hayErrores;//el signo ! cambia el valor false a true
}

