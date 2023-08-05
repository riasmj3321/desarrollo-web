const d = document;
export function reloj() {
  let relojtiempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-activar")) {
      relojtiempo = setInterval(() => {
        let relojhora = new Date().toLocaleString();
        d.querySelector("#reloj").textContent = relojhora;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches("#btn-desactivar")) {
      clearInterval(relojtiempo);
      d.querySelector("#btn-activar").disabled = false;
      d.querySelector("#reloj").textContent = null;
    }
  });
}
