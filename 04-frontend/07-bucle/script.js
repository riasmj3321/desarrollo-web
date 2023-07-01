// ciclo while
// let contador = 0;

// while (contador < 10) {
//   console.log(contador);
//   contador++;
// }

// console.log("el ciclo ya termino");

//variable contadora es la que esta en la segunda fila
//algo que lo detenga la que esta en la fila 4
//El incremento lo que esta en la fila 6

//ciclo do while
// contador2 = 0;

// do {
//   console.log(contador2);
//   contador2++;
// } while (contador2 <= 10);

// console.log("el ciclo termino");

//se realiza por lo menos una vez

//ciclo for

// for (let contador3 = 0; contador3 <= 10; contador3++) {
//   console.log("la variable contadora es " + contador3);
// }

// console.log("el ciclo ya termino");

//arrancA EN 0, PREGUNTA si cero es menor o igual a 10 <=, despues de eso le damos la orden de que si cumple con la funcion le sume uno de mas (contador3++), esto se fectuara hasta que deje de cumplir con la condicion.

// for (let contador = 0; contador <= 100; contador += 1) {
//   console.log(contador);
// }

let sumatoria = 0;

for (let contador = 1; contador <= 100; contador++) {
  sumatoria = sumatoria + contador;
}
console.log("resulatdo es " + sumatoria);
