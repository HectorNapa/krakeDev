probarAtributo= function(){
    let persona={
        nombre: 'Pedro',
        apellido: 'Morales',
        edad: 24,
        estaVivo: true
    }
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