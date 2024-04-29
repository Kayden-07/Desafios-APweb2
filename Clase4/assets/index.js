/*
let usuario = "gino"
let contrasena = "123"

let usuarioIngresa = prompt("Ingrese su usuario: ")
let contrasenaIngresada = prompt("Ingrese su contraseña: ")

if (usuario == usuarioIngresa && contrasena == contrasenaIngresada) {
    alert("Usuario y contraseña correctas, bienvenido " + usuarioIngresa)
} else {
    alert("Usuario o contraseña incorrecta")
} 

function saludar (nombre) {
    console.log("hola " + nombre)
}

let nombreUsuario = prompt("pone nombre ")

saludar(nombreUsuario)

const suma = 3 + 5

const sumaFlecha = () => {
    console.log("hola")
}

sumaFlecha()*/

let resultado;

function sumar(num1, num2) {
    resultado = num1 + num2;
    return resultado;
}

function restar(num1, num2) {
    resultado = num1 - num2;
    return resultado;
}

console.log("la suma es " + sumar(4, 3) + " la resta es " + restar(9, 3));
