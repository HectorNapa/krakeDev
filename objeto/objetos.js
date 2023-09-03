probarAtributo= function(){
    //ESTRUCTURA DEL OBJETO
    let persona={
        nombre: 'Pedro',
        apellido: 'Morales',
        edad: 24,
        estaVivo: true
    }
    //ACCEDER A LAS PROPIEDADES DEL OBJETO
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log('no esta vivo');
    }else{
        console.log('esta vivo');
    }
}
crearProducto= function(){
    let producto1={
        nombre:'Celular',//string
        precio:150,      //float
        stock:10         //int

    }
    let producto2={
        nombre:'Pc',
        precio: 600,
        stock: 9
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock == producto2.stock){
        console.log('Ambos productos tienen el mismo stock');
    }else if(producto1.stock > producto2.stock){
        console.log('Producto 1 tiene mayor stock');
    }else{
        console.log('Producto 2 tiene mayor stock');
    }
}
//MODIFICAR VALORES DE LA PROPIEDAD DE UN OBJETO
modificarAtributos=function(){
    let cuenta={
        numero:'002433564',
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
//AGRAGAR ATRIBUTOS
crearCliente= function(){
    let cliente={
        cedula:'03947353',
        nombre:'Juan'
    }
    let cliente1={}
    cliente1.nombre='ROMEO';
    cliente1.apellido='Salcedo';
    cliente1.cedula= '0293737483';
}
//------------
probarIncrementarSaldo= function(){
    let cta={cuenta:'73838374783', saldo:34.0}
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}
//En la funcion ingresan dos objetos como parametros
incrementarSaldo= function(cuenta, monto){
    cuenta.saldo+=monto;
}
probarDeterminarMayor= function(){
    let pers1={nombre:'Daniel', edad: 45};
    let pers2={nombre:'Luisa', edad: 48};
    let mayor;
    mayor= determinarMayor(pers1,pers2);
    if(mayor != null){
        console.log('el mayor es: '+ mayor.nombre);
    }
}
determinarMayor= function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1
    }else if(persona2.edad > persona1.edad){
        return persona2
    }else{
        return null;
    }
}