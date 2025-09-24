let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));

if (isNaN(salario) || salario <= 0) {
    console.log("Por favor, digite um número válido e maior que zero.");
} else {
    let aumentoPercentual = 0.15;
    salario += salario * aumentoPercentual / 100;

    let anoAtual = 2025;

    for (let ano = 1997; ano <= anoAtual; ano++) {
        aumentoPercentual *= 2;
        salario += salario * aumentoPercentual / 100;
    }

    console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
}
