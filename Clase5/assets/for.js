let alumnos = ["facundo", "lucia", "gino", "maximo"]

// console.log(alumnos[2]);

// for (let i = 0; i < alumnos.length; i++) {
//     console.log(i + " " + alumnos[i]);
// }

console.log(alumnos.indexOf('Gustavo'));
alumnos.splice(2, 1);
function eliminarDato(array, elemento) {
  const index = array.indexOf(elemento);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
eliminarDato(alumnos, "Facundo");
console.log(alumnos);