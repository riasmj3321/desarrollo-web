document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const listaCompras = document.getElementById("listaCompras");
    const totalSpan = document.getElementById("total");
    let totalCompras = 0;

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const productoInput = document.getElementById("producto");
        const precioInput = document.getElementById("precio");

        const producto = productoInput.value;
        const precio = parseFloat(precioInput.value);

        if (!isNaN(precio) && precio > 0) {
            const compraItem = document.createElement("div");
            compraItem.classList.add("compra-item");
            compraItem.innerHTML = `<strong>Producto:</strong> ${producto}, <strong>Precio:</strong> $${precio.toFixed(2)}`;
            
            listaCompras.appendChild(compraItem);

            totalCompras += precio;
            totalSpan.textContent = totalCompras.toFixed(2);

            productoInput.value = "";
            precioInput.value = "";
        }
    });
});

