let elementoPrecio = document.getElementById('precioProducto');
let titulo = document.querySelector("#nombreProducto");

setTimeout (() => {
    elementoPrecio.innerText = "$450";
    titulo.style.color = "red"
}, 1000)

let ej1 = document.getElementsByTagName("li"); //[li, li, li, li]

ej1[0].innerText = "hola, soy el li[0] desde el TagName"

let ej2 = document.getElementsByClassName("algo");

 ej2[1].innerText = "Hola, soy el li[1] desde el className"

let ej3 = document.getElementById();

let ej4 = document.querySelector("li"); //trae la primera etiqueta li de mi html
let ej5 = document.querySelectorAll(); //trae todas las etiquetas li de mi html