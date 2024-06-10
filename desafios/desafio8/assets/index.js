const productos = ["cebolla", "pepino", "calabaza", "choclo"]

        for (let prod of productos) {
            let h2 = document.createElement("h2")
            h2.innerHTML= `<p>Nombre: ${prod} </p>`
            document.body.appendChild(h2)
        }