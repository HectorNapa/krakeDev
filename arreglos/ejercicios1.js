let notas=[];

agregarElementos= function(){
    notas.push(5);
    notas.push(10);
    console.log( notas.length);
}
probarAgregar= function(){
    let notaRecuperada;
    notaRecuperada= recuperarInt('txtNotas');
    agregarNota(notaRecuperada);
}
agregarNota= function(nota){
    notas.push(nota);
    mostrarNotas();
}
recorrerArreglo= function(){
    let notasR
    for(let indice= 0; indice < notas.length; indice++){
        notasR= notas[indice];
        console.log(notasR);
    }
}
generarTabla=function(){
    let contenidoTabla='';
    let cmpTabla= document.getElementById('divTabla');
    contenidoTabla += '<table><tr><td>UNO</td></tr>'+'<tr><td>DOS</td></tr></tabble>';
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarNotas= function(){
    let cmpTabla= document.getElementById('divTabla');
    let  contenidoTabla='<table><tr><th>NOTA<th></tr>';
    let miNota;
    for(let i=0; i < notas.length; i++){
        miNota= notas[i];
        contenidoTabla+='<tr><td>';
        contenidoTabla+= miNota;
        contenidoTabla+='</tr></td>';
    }
    contenidoTabla+= '</table>';
    cmpTabla.innerHTML= contenidoTabla;
}
calcularPromedio= function(){
    let sumaNotas= 0;
    let promedio;
    let notasR;
    for(i=0; i<notas.length; i++){
        notasR= notas[i];
        sumaNotas+= notasR;
    }
    promedio= sumaNotas/notas.length;
    return promedio;
}
ejecutarPromedio= function(){
    let promdio=calcularPromedio();
    mostrarTexto('h3Texto',promdio);
}