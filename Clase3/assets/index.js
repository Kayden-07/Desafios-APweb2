
/*let afirmativo = true
let edad = 19
let nombre = prompt("Ingresa tu nombre")

if (afirmativo) {
    alert("dio " + afirmativo)

    if ((edad >= 18) && (nombre == "gustavo" || nombre == "Gustavo")) {
        alert("Hola " + nombre + " sos mayor")
    } else {
        alert("sos menor")
    }

} else {
    alert("dio falso y es menor ")
}*/

let luvia = true
let paraguas = true
let rompeVientos = false 
let Sol = false
let gorra = false
let protectorSolar = false

if (lluvia && sol) {
    Swal.fire("Se creo un arcoiris");
}
else if (lluvia) {
    if (paraguas && rompeVientos) {
        Swal.fire("Estas bien protegido");
    }
    else if (!paraguas) {Swal.fire("Esta lloviendo y no tenes paraguas");}
    else if (!rompeVientos) {Swal.fire("Esta llovindo y no tenes la campera");}
}
else if (sol) {
    
}