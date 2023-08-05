const btnRegistrar = document.getElementById('btn_registrar');
const nombreInput = document.getElementById('nombre');
const horaIngresoInput = document.getElementById('hora_ingreso');
const horaSalidaInput = document.getElementById('hora_salida');
const registrosDiv = document.getElementById('registros');
const totalHorasSpan = document.getElementById('total');

let totalHorasTrabajo = 0;

btnRegistrar.addEventListener("click", () => {
  
 
const nombre = nombreInput.value;
  
 
const horaIngreso = horaIngresoInput.value;
  
 
const horaSalida = horaSalidaInput.value;

  

 
if (validarHora(horaIngreso) && validarHora(horaSalida)) {
    
   
registrarHoras(nombre, horaIngreso, horaSalida);
  } else {
    alert("Por favor, ingresa horas válidas en formato HH:MM.");
  }
});

function validarHora(hora) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  
 
return regex.test(hora);
}

function registrarHoras(nombre, horaIngreso, horaSalida) {
  
 
const registro = document.createElement('div');
  registro.
 
classList.add('registro');
  registro.innerHTML = `<strong>Cliente:</strong> ${nombre}, <strong>Hora de Ingreso:</strong> ${horaIngreso}, <strong>Hora de Salida:</strong> ${horaSalida}`;
  registrosDiv.appendChild(registro);

  const horaInicio = new Date(`01/01/2023 ${horaIngreso}`);
  
 
const horaFin = new Date(`01/01/2023 ${horaSalida}`);
  
 
const horasTrabajadas = (horaFin - horaInicio) / 3600000; // Convertir a horas

  totalHorasTrabajo += horasTrabajadas;
  totalHorasSpan.

  totalHorasTrabajo += horasTrabajadas;
  totalHorasSpan


  totalHorasTrabajo += horasTrabajadas;
 


  totalHorasTrabajo += horasTrabajadas;


  totalHor



textContent = totalHorasTrabajo.toFixed(2);



// Limpia los campos después de registrar las horas
  nombreInput.
 
value = "";
  horaIngresoInput.
 
value = "";
  horaSalidaInput.
 
value = "";
}