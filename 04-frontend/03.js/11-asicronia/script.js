// 1. Codigo sincrono

// Tradicionalmente, JavaScript es un lenguaje de programación de un solo hilo. Esto significa que solo puede ejecutar una tarea a la vez.
// En javascript sincrono, las tareas se ejecutan en secuencia una tras otra. Cuando una tarea se completa, la siguiente comienza inmediatamente.

// let numeroFinal = 0;
// for (let i = 0; i < 1000000000; i++) {
//   numeroFinal++;
// }
// console.log(numeroFinal);
// document.body.style.backgroundColor = "red";
// console.log("Fin");

// 2. Codigo asincrono

// JavaScript es un lenguaje de programación asíncrono, lo que significa que puede manejar múltiples tareas al mismo tiempo.

// a. Callbacks
// b. Promesas
// c. Async/await

// a. Callbacks

// Callbacks son funciones que se pasan como argumentos a otras funciones. Se utilizan para ejecutar código después de que se haya completado una tarea.

/* 
? Ejemplo 1
function calculadora(num1, num2, operacion) {
  return operacion(num1, num2);
}

function sumar(a, b) {
  console.log(a + b);
}

function restar(a, b) {
  console.log(a - b);
}

calculadora(3, 7, sumar);
calculadora(5, 2, restar);
*/

/* 
? Ejemplo 2 
*/

// function llegar() {
//   console.log("Llegar");
// }

// function esperar(callback) {
//   setTimeout(() => {
//     console.log("Esperar");
//     callback();
//   }, 2000);
// }

// function irse() {
//   console.log("Irse");
// }

// llegar();
// esperar(irse);

/* 
? Ejemplo 2 
*/

// function handleClick(callback) {
//   console.log("Botón clickeado");
// }

// // Asignación de callback a un evento
// const button = document.querySelector("#miBoton");
// button.addEventListener("click", handleClick);

/*
? Ejemplo 3
*/

/* function hola(nombre, callback) {
  setTimeout(() => {
    console.log("Hola");
    callback(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre) {
  console.log("Adios " + nombre);
}

hola("Juan", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre);
      });
    });
  });
}); */

// b. Promesas

// Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

// El promise tiene tres estados:
// 1. Pending: estado inicial, no cumplida o rechazada.
// 2. Resolved: significa que la operación se completó.
// 3. Rejected: significa que la operación falló.

/*
? Ejemplo 1
*/

/* let teHasPortadoBien = true;

const siMePortoBien = new Promise((resolve, reject) => {
  if (teHasPortadoBien) {
    const telefono = {
      marca: "Iphone",
      modelo: "14 Pro Max",
      espacio: "512 GB",
      color: "Gris espacial",
    };
    resolve(telefono);
  } else {
    reject("Te has portado mal 😢");
  }
});

siMePortoBien
  .then((telefono) => {
    console.log("Te portaste bien, recibiste un " + telefono.marca);
  })
  .then(() => {
    console.log("Grabar un video con el iPhone");
  })
  .catch((error) => {
    console.log(error);
//   }); */

// let hayUnaPersona = true;

// function hola(nombre) {
//   return new Promise((resolve, reject) => {
//     if (hayUnaPersona) {
//       setTimeout(() => {
//         console.log("Hola");
//         resolve(nombre);
//       }, 2000);
//     } else {
//       reject("No se pudo saludar");
//     }
//   });
// }

// function hablar() {
//   console.log("Bla bla bla bla...");
// }

// hola("Angelo")
//   .then((nombre) => {
//     console.log("Hola " + nombre);
//   })
//   .then(hablar)
//   .then(hablar)
//   .then(hablar)
//   .then(() => {
//     console.log("Adios");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function fetchDataWithCallback(url, callback) {
//   // Simulando una solicitud de datos
//   setTimeout(() => {
//     const data = { name: "Ejemplo de datos" };
//     callback(data);
//   }, 1000);
// }

// fetchDataWithCallback("https://ejemplo.com/api/data", (data) => {
//   console.log("Datos recibidos:", data);
// });

function fetchDataWithPromise(url) {
  return new Promise((resolve, reject) => {
    // Simulando una solicitud de datos
    setTimeout(() => {
      const data = { name: "Ejemplo de datos" };
      resolve(data);
    }, 1000);
  });
}

fetchDataWithPromise("https://ejemplo.com/api/data")
  .then((data) => {
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
