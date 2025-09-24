function calcularMontante(C, i, t) {
    return C * Math.pow(1 + i / 100, t);
}

let C = parseFloat(prompt("Digite o capital inicial (C):"));
let i = parseFloat(prompt("Digite a taxa de juros mensal em % (i):"));
let t = parseInt(prompt("Digite o tempo do investimento em meses (t):"));

if (isNaN(C) || isNaN(i) || isNaN(t) || C <= 0 || t <= 0) {
    console.log("Por favor, digite valores válidos e positivos.");
} else {
    let montante = calcularMontante(C, i, t);
    console.log(`Montante final: R$ ${montante.toFixed(2)}`);
}
