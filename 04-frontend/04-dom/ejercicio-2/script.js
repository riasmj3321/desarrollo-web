// Obtener el elemento padre donde va a estar mi aplicacion
const app = document.querySelector("#app");
// Crear el H1
const h1 = document.createElement("h1");
// Modificando el elemento H1
h1.textContent = "Los Gatos";
h1.className = "titulo";
// Agregando el elemento H1 al elemento padre
app.appendChild(h1);

// Crear elemento p
const parrafo = document.createElement("p");
// Modificando el elemento p
parrafo.textContent = `Los gatos son animales domésticos que se caracterizan por su elegancia, agilidad y carácter independiente. Son mascotas muy populares en todo el mundo.`;
parrafo.classList.add("descripcion");
// Agregando el elemento P al elemento padre
app.appendChild(parrafo);

// Crear elemento img
const imagen = document.createElement("img");
// Modificando el elemento img
imagen.className = "imagen-gato";
imagen.src = "https://http.cat/images/200.jpg";
imagen.alt = "Gato";
// Agregando el elemento img al elemento padre
app.append(imagen);

// Crear h2
const h2 = document.createElement("h2");
// Modificando el elemento h2
h2.textContent = "Razas de gatos";
h2.className = "titulo";
// Agregando el elemento h2 al elemento padre
app.append(h2);

// Crear lista desordenada (ul)
const lista = document.createElement("ul");
// Modificar las propiedades de la lista
lista.classList.add("razas-gatos");

// Crear un array con las razas de gatos
const razas = [
  "Angora turco",
  "Bengala",
  "Burmés",
  "Persa",
  "Siamés",
  "Maine Coon",
];
// Opcion 1: ciclo for
console.time("for");
for (let i = 0; i < razas.length; i++) {
  const li = document.createElement("li");
  li.className = "descripcion";
  li.textContent = razas[i];
  lista.appendChild(li);
}
console.timeEnd("for");

// Opcion 2: forEach
console.time("foreach");
razas.forEach((elementoDelArray) => {
  const li = document.createElement("li");
  li.className = "descripcion";
  li.textContent = elementoDelArray;
  lista.appendChild(li);
});
console.timeEnd("foreach");

//Ahora forEach pero con function
// razas.forEach(function (raza) {
//   const li = document.createElement("li");
//   li.className = "descripcion";
//   li.textContent = raza;
//   lista.appendChild(li);
// });

app.appendChild(lista);

const h1 = document.querySelector("h1");

const salu2 = function (evento) {
  console.log(evento);
  console.log("Has hecho click en el h1");
};

h1.addEventListener("click", salu2);
