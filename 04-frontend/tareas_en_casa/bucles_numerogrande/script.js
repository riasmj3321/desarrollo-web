const numero = [10, 5, 2, 6, 4];

function numerogrande(array) {
    let maximo = array[0];

    for(let i = 1; i <array.length; i++) {

        if (array[i] > maximo) {
            maximo = array[i];
        }
        }

        return maximo;
}

const resultado = numerogrande(numero);
console.log (resultado)

console.log (numerogrande([1,2,5,15]));