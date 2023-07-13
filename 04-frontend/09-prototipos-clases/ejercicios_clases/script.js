class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  //aqui se utiliza el return para no utilizar console.log
  obtenerDetalles() {
    return `Marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`;
  }
}
//aqui se utiliza el return para no utilizar console.log

const moto = new Vehiculo("yamaha", "rtx", "2001");

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}, puertas: ${this.puertas}`;
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
s;
