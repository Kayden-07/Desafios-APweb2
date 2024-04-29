function sumarProductos(precioUnitario, cantidadDeseada) {
    let gastoTotal = precioUnitario * cantidadDeseada
    return gastoTotal;
}

precio = 1200;

cantidad = prompt("Ingresa cuantas medias queres comprar (cada una vale" + precio +  ")")

let precioTotal = sumarProductos(precio, cantidad)

console.log("Gastaste " + precioTotal + " en " + cantidad + " medias")