const productos = [
    {nombre: "remera", precio: 1000, stock:20},
    {nombre: "cartera", precio: 1000, stock:20},
    {nombre: "pantalon", precio: 1000, stock:20},
];

let CP =document.getElementById("CP");

productos.forEach((prod) => {
    let card = document.createElement("div")
    card.classList.add("card") //agrego clases a la etiqueta

    let h2 = document.createElement("h2")
    h2.textContent = prod.nombre

    let p = document.createElement("p");
    p.textContent = `precio: $${prod.precio}`

    let stock = document.createElement("p");
    p.textContent = `stock: $${prod.stock}`

    CP.appendChild(card);

})

/*let div = document.getElementById("parrafo");

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hola desde js"

div.appendChild(nuevoParrafo);

console.log(nuevoParrafo);*/