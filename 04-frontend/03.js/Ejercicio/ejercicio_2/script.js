let nombre = prompt("ingresa tu nombre");
alert("hola " + nombre);
let peso = prompt("ingresa tu peso solo coloca los numeros");
let altura = prompt("ingresa tu altura en metros, separado por punto.");
let resultado = peso / (altura * altura);
let resultadofinal = parseFloat(resultado.toFixed(2));

if (resultadofinal < 18.5) {
  alert("tu IMC es " + resultadofinal + " tienes bajo peso");
} else if (resultadofinal >= 18.5 && resultadofinal < 25) {
  alert("Tu IMC es " + resultadofinal + " tienes peso normal");
} else if (resultadofinal >= 25 && resultadofinal < 30) {
  alert("Tu IMC es " + resultadofinal + " tienes sobre peso");
} else {
  alert("Tu IMC es " + resultadofinal + " Tienes obesidad");
}
