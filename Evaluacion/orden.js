let personas=[
    {nombre:'Marcos',  edad:18},
    {nombre:'Roberto', edad: 15},
    {nombre:'Kate',    edad:25},
    {nombre:'Diana',   edad: 12},
    {nombre:'Benja',   edad:5}
];

agregarPersona= function(){
    let validaNombre= false;
    //Recupera y valida nombre:
    let nombreRecuperado=recuperarTexto('txtNombre');
    if(nombreRecuperado == ""){
        mostrarTexto("erroresNombre","Campo obligatorio *");
    }else if(nombreRecuperado.length >= 3){
        validaNombre= true;
        mostrarTexto("erroresNombre","");
    }else{
        mostrarTexto("erroresNombre", "Ingresar mas de 3 caracteres");
    }
    //Recupera y valida edad:
    let validaEdad= false;
    let edadRecuperada= recuperarTexto('txtEdad');
    let edadIntero;
    if(edadRecuperada == ""){
        mostrarTexto("erroresEdad","Campo obligatorio *");
    }else{
        edadIntero= parseInt(edadRecuperada);
        if(edadRecuperada >=0 && edadRecuperada <= 100){
            validaEdad= true;
            mostrarTexto("erroresEdad","");
        }else{
            mostrarTexto("erroresEdad","Ingrese la edad entre 0 y 100");
        }
    }
     
    if(validaNombre == true & validaEdad == true){
        //Crear nuevo objeto para agregar al array y mostrar en la tabla:
        let nuevaPersona={};
        nuevaPersona.nombre= nombreRecuperado;
        nuevaPersona.edad= edadRecuperada;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarTablaPersonas();
        mostrarTextoEnCaja('txtNombre','')
        mostrarTextoEnCaja('txtEdad','')
    }

}
//Mostra tabla en pantalla:
mostrarTablaPersonas= function(){
    let cmpTabla=document.getElementById('mostrarTabla');
    let tabla='<table><tr>'+
              '<th>EDAD</th>'+
              '<th>NOMBRE</th>'+
              ' </tr>';
    let persona;
    for(let i=0; i< personas.length; i++){
        persona= personas[i];
        tabla+="<tr><td>"+persona.edad+"</td><td>"+persona.nombre+"</td></tr>"
    }
    tabla+="</table>";
    cmpTabla.innerHTML= tabla;
}
//Encontrar el mayor:
encontrarMayor= function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(let i= 1;i < personas.length;i++){
        elementoPersona= personas[i];
        console.log(elementoPersona);
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}
determinarMayor= function(){
   let mayor= encontrarMayor();
   mostrarTexto("mostrarMayorOMenor",'El menor es: '+mayor.nombre+' con '+mayor.edad+' años de edad.');
}
//Encontrar el menor:
encontrarMenor= function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1; i< personas.length; i++){
        elementoPersona= personas[i];
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}
determinarMenor=function(){
    let menor= encontrarMenor();
    mostrarTexto("mostrarMayorOMenor",'El menor es: '+menor.nombre+' con '+menor.edad+' años de edad.');
}