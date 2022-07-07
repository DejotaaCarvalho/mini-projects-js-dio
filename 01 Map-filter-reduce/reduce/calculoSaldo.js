const lista = [
    {
        name: 'pasta de dente',
        price: 6
    },
    
    {
        name: 'shampoo',
        price: 22
    },

    {
        name: 'suco 2L',
        price: 15
    },
];

const saldoDisponivel = 100;

function calculoSaldo(saldoDisponivel, lista) {         //.price pois é só isso que eu quero
    return lista.reduce((prev, current) => prev - current.price, saldoDisponivel);
}

console.log('Forma reduzida:', calculoSaldo(saldoDisponivel, lista));

// Só para observar por 'rodada" como está sendo feito o calculo
function detalhesSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('\n rodada', index +1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(detalhesSaldo(saldoDisponivel, lista));