//busco la variable table
const titulo = document.querySelector("#app");
// creo el elemento dentro de la variable
const h1 = document.createElement("h1");
// agrego el contenido
h1.textContent = "Los gatos";
// lo agrego el h1 al titulo
titulo.append(h1);

const parrafo = document.querySelector("#app");
const p = document.createElement("p");
p.textContent =
  "Los gatos son animales domésticos que se caracterizan por su elegancia,agilidad y carácter independiente. Son mascotas muy populares en todo elmundo.";
parrafo.insertAdjacentElement("afterend", p);




