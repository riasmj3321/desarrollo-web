const numero = [10, 8, 5, 6, 3];

function parimpar(numero) {
  let numerospares = 0;
  let numerosimpares = 0;

  for (let i = 0; i < numero.length; i++) {
    //para ingresar al array
    if (numero[i] % 2 === 0) {
      // formula para saber si es par
      numerospares++; //sumar la cantidad de pares
    } else {
      numerosimpares++; //sino es par por ley es impar
    }
  }

  return { numerospares, numerosimpares };
}

console.log(parimpar([1, 9, 5, 7]));
