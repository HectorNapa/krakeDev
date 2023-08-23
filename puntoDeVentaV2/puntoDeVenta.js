calcularValorTotal = function(){
    let nombreProducto = recuperarTexto('txtProducto');
    let cantidad= recuperarInt('txtCantidad');
    let precioProducto= recuperarFloat('txtPrecio');
    //validaciones de cada una de la funciones por true
    if(esProductoValido(nombreProducto,'errorProducto')& esCantidadValida(cantidad,'errorCantidad')& esPrecioValido(precioProducto,'errorPrecio')){
        let valorSubtotal= calcularSubtotal(precioProducto, cantidad);
        let valorDescuento= calcularDescunetoPorVolumen(valorSubtotal, cantidad);
        let totalPagar= valorSubtotal- valorDescuento;
        let valorIVA= calcularIva(totalPagar);
        let valorTotal= calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto('lblSubtotal', valorSubtotal);
        mostrarTexto('lblDescuento',valorDescuento);
        mostrarTexto('lblValorIVA', valorIVA);
        mostrarTexto('lblTotal', valorTotal);
        let detalle ='Valor a pagar por '+ cantidad +' '+ nombreProducto +' es de: '+ valorTotal+' USD';
        mostrarTexto('lblResumen',detalle); 
    }
}   
limpiar=function(){
    //Caja de texto
        mostrarTextoEnCaja('txtProducto',' ');
        mostrarTextoEnCaja('txtCantidad','0');
        mostrarTextoEnCaja('txtPrecio','0.0');
        //En pantalla
        mostrarTexto('lblSubtotal', '0.0');
        mostrarTexto('lblDescuento','0.0');
        mostrarTexto('lblValorIVA', '0.0');
        mostrarTexto('lblTotal', '0.0');
        mostrarTexto('lblResumen','0.0');  
}
//VALIDACIONES:
esProductoValido= function(producto, idComponente){
    let hayError= false;
    let caracters;
    if(producto == ''){
        mostrarTexto(idComponente,'*CAMPO OBLIGATORIO');
        hayError= true;
    }
    caracters= producto.length;
    if(caracters > 10){
        mostrarTexto(idComponente, 'El nombre del producto no puede tener mas de 10 caracteres');
        hayError= true;
    }
    if(hayError == false){
        mostrarTexto(idComponente,'');
    }
    return !hayError;
}
esCantidadValida= function(cantidad, idComponente){
    let hayError= false;
    if(isNaN(cantidad)){
        mostrarTexto(idComponente,'*CAMPO OBLIGATORIO');
        hayError= true;
    }
    if(cantidad < 0 || cantidad > 100){
        mostrarTexto(idComponente, 'La cantidad debe ser un numero entero entre 0 y 100');
        hayError= true;
    }
    if(hayError == false){
        mostrarTexto(idComponente,'');
    }
    return !hayError;
}
esPrecioValido= function(precio, idComponente){
    let hayError= false;
    if(isNaN(precio)){
        mostrarTexto(idComponente,'*CAMPO OBLIGATORIO');
        hayError= true;
    }
    if(precio < 0 || precio > 50){
        mostrarTexto(idComponente, 'El precio debe ser un numero entre 0 y 50');
        hayError= true;
    }
    if(hayError == false){
        mostrarTexto(idComponente,'');
    }
    return !hayError;
}