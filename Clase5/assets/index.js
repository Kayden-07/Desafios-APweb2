//let contador = 1;
//do {
//    console.log("Hola");
//    contador++;
//} while (contador <= 5) 

let intentos = 3;
let userName = "gino"
let passWord = "123"

function login (){
    while (intentos > 0) {
        let inputUserName = prompt("Ingrese su nombre de usuario ");
        let inputPassWord = prompt("Ingrese su contraseña ");

        if (inputUserName == userName && inputPassWord == passWord) {
            alert("Ingresaste correctamente");
            break;
        } else {
            intentos--;
            alert("Usuario o contraseña incorrectos, tenes " + intentos + " intentos");
        }
    }

    if (intentos == 0) {
        alert("Intentalo la proxima");
    }
}

login();