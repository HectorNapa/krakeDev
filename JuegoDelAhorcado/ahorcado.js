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
mostrarLetra= function(letra, posicion){
    if(posicion == 0){
        mostrarTexto('div0',letra);
    }else if(posicion == 1){
        mostrarTexto('div1',letra);
    }else if(posicion == 2){
        mostrarTexto('div2',letra);
    }else if(posicion == 3){
        mostrarTexto('div3',letra);
    }else if(posicion == 4){
        mostrarTexto('div4',letra);
    }
}
validar= function(letra){
    let letrasEncontradas= 0;
    let letraSecreta;
      for(let i=0; i<5; i++){
        letraSecreta= palabraSecreta.charAt(i);
            if(letraSecreta == letra){
                mostrarLetra(letra,i);
                letrasEncontradas++;
            }
      }
}