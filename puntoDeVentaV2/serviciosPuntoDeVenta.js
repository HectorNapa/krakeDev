
calcularIva=function(monto){
    let iva;
    iva= ((monto * 12)/100);
    return iva;
}
calcularSubtotal= function(precio, cantidad){
    let totalPagar;
    totalPagar= precio * cantidad;
    return totalPagar;
}
calcularTotal= function(subtotal, descuento, iva){
    let totalPagarUsuario;
    totalPagarUsuario= ((subtotal - descuento) + iva);
    return totalPagarUsuario;
}
calcularDescunetoPorVolumen=function(subtotal, cantidad){
    let descuento;
    if(cantidad < 3){
        descuento= (subtotal*0)/100;
    }else if(cantidad >=3 && cantidad <=5){
        descuento= (subtotal*3)/100;
    }else if(cantidad >= 6 && cantidad <=11){
        descuento= (subtotal*4)/100;
    }else{
        descuento= (subtotal*5)/100;
    }
    return descuento;
}