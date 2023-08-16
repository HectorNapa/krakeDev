calcularValorDescuento= function(monto, porcentajeDescuento){
    let descuento;
    descuento= (monto * porcentajeDescuento)/100;
    return descuento;
}
calcularIva=function(monto){
    let iva;
    iva= (monto * 12)/100;
    return iva;
}
calcularSubtotal= function(precio, cantidad){
    let totalPagar;
    totalPagar= precio * cantidad;
    return totalPagar;
}
calcularTotal= function(subtotal, descuento, iva){
    let totalPagarUsuario;
    totalPagarUsuario= subtotal - descuento + iva;
    return totalPagarUsuario;
}
