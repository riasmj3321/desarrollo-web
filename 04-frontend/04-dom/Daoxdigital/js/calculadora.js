const d = document;

export function calculadora() {
  const pantalla = d.querySelector(".pantalla");
  const botones = d.querySelectorAll(".btn-claculadora");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const botonapretado = boton.textContent;

      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        if (
          pantalla.textContent.length === 1 ||
          pantalla.textContent === "Error!"
        ) {
          pantalla.textContent = "0";
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      }

      if (boton.id === "igual") {
        pantalla.textContent = eval(pantalla.textContent);
      }

      if (pantalla.textContent === "0") {
        pantalla.textContent = botonapretado;
      } else {
        pantalla.textContent += botonapretado;
      }
    });
  });
}
