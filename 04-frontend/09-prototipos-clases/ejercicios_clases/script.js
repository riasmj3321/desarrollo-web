class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Año: ${this.año}`);
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`Puertas: ${this.puertas}`);
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`Cilindrada: ${this.cilindrada}`);
  }
}

// Ejemplo de uso
const miAutomovil = new Automovil("mazda", "carroseria", "2002", "4");
miAutomovil.obtenerDetalles();

const miMotocicleta = new Motocicleta("Kia", "Picanto", "2020", "198");
miMotocicleta.obtenerDetalles();
