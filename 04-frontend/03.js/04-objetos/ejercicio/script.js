const equipofutbol = {
  nombre: "america",
  campeonatos: 15,
  futbol: true,
  categoria: ["FEMENINO", "MASCULINO", "INFERIORES"],

  juegar: function () {
    console.log("jugadores profesionales" + this.categoria[2]);
  },
  cumplir: function () {
    this.campeonatos = this.campeonatos + 1;
  },
};
