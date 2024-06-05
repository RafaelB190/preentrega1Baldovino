let producto = " ";
let cantidad = 0;
let cantidadTotal = 0;
let precio = 0;
let precioTotal = 0;
let seguirComprando = false;

do {
    producto = prompt("Comprar sorrentinos, humita o ambosPromo ");
    cantidad = parseInt(prompt("Ingrese cantidad deseada de compra"));
    
    const validarCantidad = (cantidad) => {
        while (Number.isNaN(cantidad) || cantidad === 0) {
            if (cantidad !== 0) {
                alert("Agregar cantidad");
            } else {
                alert("Agregar número distinto de cero");
            }
            cantidad = parseInt(prompt("¿Cuántos querés comprar?"));
        }
        return cantidad;
    };

    const cantidadValidada = validarCantidad(cantidad);
    
    switch (producto.toLowerCase()) {
        case "sorrentinos": 
            precio = 3000;
            break;
        case "humita":
            precio = 1500;
            break;
        case "ambospromo":
            precio = 4250;
            break;
        default: 
            alert("Datos incorrectos");
            precio = 0;
            cantidad = 0;
    }
    
    precioTotal += precio * cantidadValidada;
    cantidadTotal += cantidadValidada;

    seguirComprando = confirm("¿Quiere algo más?");
} while (seguirComprando);

alert(`Adquisición de ${cantidadTotal} productos y el total es $${precioTotal}`);
alert("muchas gracias por su compra");


