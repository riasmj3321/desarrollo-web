document.addEventListener("DOMContentLoaded", function () {
    let trabajadores = [];
    const diasDeTrabajo = ["Turno 1", "Turno 2", "Turno 3"];
    const listaTrabajadores = document.getElementById("lista-trabajadores");
    const generarTurnosBtn = document.getElementById("generar-turnos");
    const agregarTrabajadorBtn = document.getElementById("agregar-trabajador");
    const nuevoTrabajadorInput = document.getElementById("nuevo-trabajador");
    const cambiosTurnoBtn = document.getElementById("cambios-turno");
    const cambiosTurnoSelect = document.getElementById("cambios-select");
    const registroTurnos = [];

    generarTurnosBtn.addEventListener("click", function () {
        listaTrabajadores.innerHTML = "";
        const descripcionesTurnos = document.getElementById("descripciones-turnos");
        descripcionesTurnos.innerHTML = ""; // Limpiar las descripciones de turnos anteriores
    
        if (trabajadores.length === 0) {
            alert("Agrega trabajadores antes de generar turnos.");
            return;
        }
    
        const turnosDisponibles = [...diasDeTrabajo];
    
        trabajadores.forEach((trabajador) => {
            if (turnosDisponibles.length === 0) {
                alert("No hay suficientes turnos disponibles para todos los trabajadores.");
                return;
            }
    
            const indiceTurno = Math.floor(Math.random() * turnosDisponibles.length);
            const turnoAsignado = turnosDisponibles.splice(indiceTurno, 1)[0];
    
            const listItem = document.createElement("li");
            listItem.textContent = `${trabajador}: ${turnoAsignado}`;
            listaTrabajadores.appendChild(listItem);
    
            registroTurnos.push({ trabajador: trabajador, turno: turnoAsignado });
    
            // Crear una descripción de turno y agregarla al elemento de descripciones
            const descripcionTurno = document.createElement("p");
            descripcionTurno.textContent = `${trabajador} trabajará el  ${turnoAsignado}.`;
            descripcionesTurnos.appendChild(descripcionTurno);
        });
    });

    agregarTrabajadorBtn.addEventListener("click", function () {
        const nuevoTrabajador = nuevoTrabajadorInput.value.trim();
        if (nuevoTrabajador !== "") {
            if (!trabajadores.includes(nuevoTrabajador)) {
                trabajadores.push(nuevoTrabajador);
                nuevoTrabajadorInput.value = "";
                nuevoTrabajadorInput.focus();
                alert(`"${nuevoTrabajador}" ha sido agregado como trabajador.`);
                actualizarSelectTrabajadores();
            } else {
                alert(`"${nuevoTrabajador}" ya está en la lista de trabajadores.`);
            }
        }
    });

    cambiosTurnoBtn.addEventListener("click", function () {
        const seleccionado = cambiosTurnoSelect.value;
        if (seleccionado !== "") {
            const trabajadorEncontrado = registroTurnos.find((registro) => registro.trabajador === seleccionado);
            if (trabajadorEncontrado) {
                const nuevoTurno = diasDeTrabajo[Math.floor(Math.random() * diasDeTrabajo.length)];
                trabajadorEncontrado.turno = nuevoTurno;
                alert(`Se ha cambiado el turno de ${seleccionado} a ${nuevoTurno}`);
                actualizarListaTrabajadores();
            } else {
                alert(`No se encontró a ${seleccionado} en el registro de turnos.`);
            }
        }
    });

    function actualizarSelectTrabajadores() {
        cambiosTurnoSelect.innerHTML = "";
        trabajadores.forEach((trabajador) => {
            const option = document.createElement("option");
            option.value = trabajador;
            cambiosTurnoSelect.appendChild(option);
        });
    }

    function actualizarListaTrabajadores() {
        listaTrabajadores.innerHTML = "";
        registroTurnos.forEach((registro) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${registro.trabajador}: ${registro.turno}`;
            listaTrabajadores.appendChild(listItem);
        });
    }


    cambiosTurnoBtn.addEventListener("click", function () {
        const seleccionado = cambiosTurnoSelect.value;
        if (seleccionado !== "") {
            const trabajadorEncontrado = registroTurnos.find((registro) => registro.trabajador === seleccionado);
            if (trabajadorEncontrado) {
                const nuevoTurno = diasDeTrabajo[Math.floor(Math.random() * diasDeTrabajo.length)];
                trabajadorEncontrado.turno = nuevoTurno;
                alert(`Se ha cambiado el turno de ${seleccionado} a ${nuevoTurno}`);
                actualizarListaTrabajadores(); // Actualiza la lista después del cambio
            } else {
                alert(`No se encontró a ${seleccionado} en el registro de turnos.`);
            }
        }
    });

    actualizarSelectTrabajadores(); // Llamamos a esta función para inicializar el select de trabajadores.
});