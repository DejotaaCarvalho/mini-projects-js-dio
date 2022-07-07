var numeros = [8, 8];
var total = numeros.reduce((total, numero) => total + numero, 0);

console.log('Sem usar function:', total);










// Feito pela professora
function somaNumeros(arr) {
    return arr.reduce((prev, current) => prev + current, 0);
}

const arr = [1, 2]; 
console.log('Function feita pelo professor:', somaNumeros(arr));