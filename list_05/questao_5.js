const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;
    return { area, perimetro };
}

rl.question("Digite o raio do círculo: ", (input) => {
    let raio = parseFloat(input);

    if (isNaN(raio) || raio <= 0) {
        console.log("Por favor, digite um número válido e maior que zero.");
    } else {
        let resultados = calcularCirculo(raio);
        console.log(`Área: ${resultados.area.toFixed(2)}`);
        console.log(`Perímetro: ${resultados.perimetro.toFixed(2)}`);
    }

    rl.close();
});
