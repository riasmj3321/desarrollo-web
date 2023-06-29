let edad = 19;

if (edad >= 18) {
  console.log("carck eres un adulto");
} else {
  console.log("eres menor de edad");
}

let semaforo = "amarillo";

if (semaforo === "rojo") {
  console.log("debe detenerse");
} else if (semaforo == "amarillo") {
  console.log("preparese para salir");
} else if (semaforo == "verde") {
  console.log("arrancar");
} else {
  console.log("solo se puede los valores rojo,amarillo y verde");
}

let equipos = "america de cali";

if (equipos == "america de cali") {
  console.log("el mejor equipo");
} else if (equipos === "deportivo cali") {
  console, log("el peor equipo");
}

const par = (numero) => {
  if (typeof numero !== "number")
    return console.log("Debes ingresar un numero");

  if (numero % 2 === 0) {
    return console.log(`El numero es Par`);
  }

  if (numero % 2 !== 0) {
    return console.log(`El numero es Impar`);
  }
};

par(11);
par(2);

// Primera forma de verificar que el numero es paro o impar

let numero = 4;

if (numero % 2 === 0) {
  console.log("el numero " + numero + " es par");
} else if (numero % 2 === 1) {
  console.log("el numero " + numero + " es impar");
}

// segunda forma mas facil de verificar si el numero es par o impar

let number = 8;

if (number % 5 === 0 && number % 3 === 0) {
  console.log("fizzbuzz");
} else if (number % 3 === 0) {
  console.log("fizz");
} else if (number % 5 === 0) {
  console.log("buzz");
} else {
  console.log("este numeero no es divisible por 3 ni 5");
}

// verificar si el numero es multiplo del 3 y el 5

