let prod1 = 'Remeras'
let precioU = 5000
let cantidadDesada = parseInt(prompt("Ingrese la cantidad de " + prod1 + " que quiere comprar: "))

let costoTotalSinDescuento = precioU * cantidadDesada

if (cantidadDesada >= 5) {
    costoTotalSinDescuento *= 0.9
}

alert("El costo total es " + cantidadDesada + " de " + prod1 + " es: " + costoTotalSinDescuento)