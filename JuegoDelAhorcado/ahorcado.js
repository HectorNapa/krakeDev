//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta='';
guardarPalabra= function(){
    let contMayuscula= 0 ;
    let letra;
    let palabra= recuperarTexto('txtSecreta');
    let longPalabra= palabra.length;

    if(longPalabra == 5){
        for(let i=0 ; i < longPalabra ; i++){
            letra= palabra.charAt(i);
            if(esMayuscula(letra)){
                contMayuscula++;
            }
        }
        if(contMayuscula == 5){
            palabraSecreta= palabra;
            console.log(palabraSecreta);
        }else{
            alert('Ingresar una palabra de 5 letras mayuculas');
        }
}
}
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
