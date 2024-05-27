let elementoPrecio = document.getElementById('precioProducto');
let titulo = document.querySelector("#nombreProducto");

setTimeout (() => {
    elementoPrecio.innerText = "$450";
    titulo.style.color = "red"
}, 3000)