let salario = 1000;
let aumentoPercentual = 0.15;

salario += salario * aumentoPercentual / 100;

let anoAtual = 2025;

for (let ano = 1997; ano <= anoAtual; ano++) {
    aumentoPercentual *= 2;
    salario += salario * aumentoPercentual / 100;
}

console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
