//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula= function(caracter){
    let valida;
    let letra= caracter.charCodeAt(0);
    if(letra >= 65 &&  letra <= 90){
        valida= true;
    }else{
        valida= false;
    }
    return valida;
}
