const servicios = document.querySelectorAll('.servicio');

servicios.forEach(servicio => {
  const titulo = servicio.querySelector('.servicio-titulo');
  const descripcion = servicio.querySelector('.servicio-descripcion');

  titulo.addEventListener('click', () => {
    descripcion.classList.toggle('mostrar');
  });
});