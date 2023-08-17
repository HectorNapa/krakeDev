calcularPromedioNotas= function(){
    let priNota= recuperarFloat ('txtPriNota');
    let segNOta= recuperarFloat('txtSegNota');
    let terNota= recuperarFloat('txtTercNota');
    let promedio= calcularPromedio(priNota, segNOta, terNota);
    let resultado= promedio.toFixed(2);
    mostrarTexto('lblPromedio','Su promedio es: '+ resultado);
}