let productos = ["celular", "cartera", "bincha", "laptop", "zapato", "helado"]
let productosEliminados = 0;

for (let i = 0; i < productos.length; i++) {
    console.log("Producto " + (i + 1) + ": " + productos[i])
}

for (let j = 0; j <= productos.length; j++) {
    console.log("Se vendio " + productos.pop());
    productosEliminados++;
}

for (let k = 0; k < productosEliminados; k++) {
    productos.push(prompt("Agrege un nuevo producto (agregaras el mismo numero de stock vendido)"));
    console.log(productos);
}