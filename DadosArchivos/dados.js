jugar= function(){
    let aleatorio
    aleatorio= lanzarDado();
    cambiarTexto('lblNumero', aleatorio);
    if(aleatorio > 3){
        cambiarTexto('lblMensaje','ES MAYOR A 3 ...GANASTE...');
    }else{
        cambiarTexto('lblMensaje','ES MENOR A 3 ...ESTAS DE MALA...');     
    }
}
//Crear una funcion llamada lanzar dado
// no recibe parametros
//retorna un numero aleatorio entre 1 y 6
lanzarDado= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();//genera numero ente 0 a 1 float
    numeroMultiplicado= aleatorio * 6;// genera numero entre 0 a 5 float
    numeroEntero= parseInt(numeroMultiplicado);// genera numero entre 0 a 5 int
    valorDado= numeroEntero+1; // genera numero entre 1 a 6 int
   return valorDado;
}