crearAleatorios= function(){
    let genAleatorio=Math.random();
    let multiplica= genAleatorio*100;
    let numEntero= parseInt(multiplica);
    let numAleatorio= numEntero +1;
    return numAleatorio;
}
generarAleatorio= function(){
    let aleatorio= [];
    let numAleatorio;
    let numRecuperado= recuperarInt('txtNumero');
    if (numRecuperado >= 5 && numRecuperado <=20){
        for(let i=0; i < numRecuperado; i++){
            console.log(i);
           numAleatorio= crearAleatorios();
           aleatorio.push(numAleatorio);
        }
        mostrarResultados(aleatorio);
    }
}
mostrarResultados= function(arregloNumeros){
    let cmpTabla= document.getElementById('divTabla');
    let tabla='<table><tr><th>NUMERO ALEATORIO</th></tr>';
    let numArreglo;
    for(let i=0; i < arregloNumeros.length;i++){
       numArreglo= arregloNumeros[i];
       tabla+= '<tr><td>';
       tabla+= numArreglo;
       tabla+= '</tr></td>';
    }
    tabla+='</table>';
    cmpTabla.innerHTML= tabla;
}