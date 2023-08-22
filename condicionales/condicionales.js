calcularTasaInteres= function(ingresoAnual){
   let valorTasaInteres;
    if(ingresoAnual < 300000){
        valorTasaInteres= (ingresoAnual * 16)/100;
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        valorTasaInteres= (ingresoAnual * 15)/100;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        valorTasaInteres= (ingresoAnual * 14)/100;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        valorTasaInteres= (ingresoAnual * 13)/100;
    }else{
        valorTasaInteres= (ingresoAnual * 12)/100;
    }
    return valorTasaInteres;
}
calcularCapacidadPago= function(edad, ingresos, egresos){
    let saldo;
    let valorCuotaPago;
    if(edad > 50){
        saldo = ingresos- egresos;
        valorCuotaPago= (saldo * 30)/100;
    }else{
        saldo = ingresos- egresos;
        valorCuotaPago=(saldo* 40)/100;
    }
    return valorCuotaPago;
}
calcularDescuento= function(precio, cantidad){
    let descuento;
    let valorPagar;
    if(cantidad < 3){
        descuento= (precio * 0)/100;
        valorPagar= precio - descuento;
    }else if(cantidad >=3 && cantidad <=5){
        descuento= (precio * 2)/100;
        valorPagar= precio - descuento;
    }else if (cantidad >= 6 && cantidad<=11){
        descuento= (precio * 3)/100;
        valorPagar= precio - descuento;
    }else{
        descuento= (precio * 4)/100;
        valorPagar= precio - descuento;
    }
    return valorPagar;
} 
determinarColesterolLDL= function(nivelColesterol){
    let resultadoColesterol;
    if(nivelColesterol < 100 ){
        resultadoColesterol= 'Su nivel de coleterol LDL es: Óptimo (lo mejor para su salud)';
    }else if(nivelColesterol >= 100 && nivelColesterol <= 129){
        resultadoColesterol= 'Su nivel de coleterol LDL es: Casi óptimo';
    }else if(nivelColesterol >= 130 && nivelColesterol <= 159){
        resultadoColesterol= 'Su nivel de coleterol LDL es: Límite superior del rango normal';
    }else if( nivelColesterol >= 160 && nivelColesterol <= 189){
        resultadoColesterol= 'Su nivel de coleterol LDL es: Alto';
    }else{
        resultadoColesterol= 'Su nivel de coleterol LDL es: Muy alto';
    }
    return nivelColesterol;
}
validarClave= function(clave){
    let valida;
    let numCaracteres= clave.length;
    if(numCaracteres >= 8 && numCaracteres <= 16){
       valida= true;
    }else{
       valida= false;
    }  
     return valida;
}
esMayuscula= function(caracter){
    let valida;
    let letra= caracter.charCodeAt(0);
    if(letra >= 65 && letra <= 90 ){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
esMinuscula= function(caracter){
    let valida;
    let letra= caracter.charCodeAt(0);
    if(letra >= 97 && letra <= 122){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
esDigito= function(caracter){
    let valida;
    let digito= caracter.charCodeAt(0);
    if(digito >= 48 && digito <= 57){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
darPermiso= function(notaMatematicas, notaFisica, notaGeometria){
    let valida;
    if(notaMatematicas > 90 || notaFisica > 90|| notaGeometria > 90 ){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
otorgarPermiso= function(notaMatematicas, notaFisica, notaGeometria){
    let valida;
    if((notaMatematicas > 90 || notaFisica > 90) && notaGeometria > 80){
        valida= true;
        console.log(valida);
    }else{
        valida= false;
        console.log(valida);
    }
    return valida;
}
dejarSalir= function(notaMatematicas, notaFisica, notaGeometria){
    let valida;
    if(notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90){
       if(notaFisica > notaMatematicas){
            valida= true;
       }else{
            valida= false;
       }
    }else{
        valida= false;
    }
}
