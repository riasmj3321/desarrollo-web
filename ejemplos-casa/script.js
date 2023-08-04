const btnRegistrar = document.getElementById('btn_registrar');
const nombreInput = document.getElementById('nombre');
const horaIngresoInput = document.getElementById('hora_ingreso');
const horaSalidaInput = document.getElementById('hora_salida');
const registrosDiv = document.getElementById('registros');

btnRegistrar.

btn


addEventListener("click", () => {
  
 
const nombre = nombreInput.value;
  
 
const horaIngreso = horaIngresoInput.value;
  const horaSalida = horaSalidaInput.value;

  

 


if (validarHora(horaIngreso) && validarHora(horaSalida)) {
    
    registrarIngresoSalida

    registrarIngresoSal

   
registrarIngresoSalida(nombre, horaIngreso, horaSalida);
  } 
  }

 
else {
    
    alert
alert("Por favor, ingresa horas válidas en formato HH:MM.");
  }
});


  }
function validarHora(hora) {
  
 
const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  
 
return regex.test(hora);
}

function registrarIngresoSalida(nombre, horaIngreso, horaSalida) {
  
 
const registro = document.createElement('div');
  registro.
 
classList.add('registro');
  registro.
 
innerHTML = `<strong>Empleado:</strong> ${nombre}, <strong>Hora de Ingreso:</strong> ${horaIngreso}, <strong>Hora de Salida:</strong> ${horaSalida}`;
  registrosDiv.
 
appendChild(registro);

  

 


// Limpia los campos después de registrar el ingreso/salida
  nombreInput.value = "";
  horaIngresoInput.
 
value = "";
  horaSalidaInput.
 
value = "";
}