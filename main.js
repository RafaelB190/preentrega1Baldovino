let producto = " ";
let cantidad = 0 ;
let cantidadTotal = 0;
let precio = 0 ;
let precioTotal = 0;
let seguirComprando = false;

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
     if (cantidad !== 0) {
        alert("agregar cantidad")
     } else {
        alert("agregar numero distinto de cero")
     }
     cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));}
     return cantidad;
    };    

do {
    producto = prompt("comprar sorrentinos, humita o ambosPromo ");
    cantidad = parseInt( prompt("ingrese cantidad desaeada de compra"));
    
    const cantidadValidada = validarCantidad(cantidad);
    ;
    switch (producto) {
        case "sorrentinos": 
            precio = 3000;
            break;
        case "humita":
            precio = 1500;
            break;
        case "ambosPromo":
            precio = 4250;
            break;
        default: 
            alert("Datos incorrectos");
            precio= 0;
            cantidad= 0;
    }        
    precioTotoal += precio * cantidadValidada;
    cantidadTotal += cantidad;   

    seguirComprando = confirm("Quiere algo mas?");
}while (seguirComprando);

alert("Adquisicion de {cantidadTotal} productos y el total es ${precioTotal}")

