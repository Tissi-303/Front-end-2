let N = parseInt(prompt("Quantos números você vai digitar?"));

let menor = Infinity; 
let maior = -Infinity;  
let soma = 0;

for (let i = 1; i <= N; i++) {
  let numero = parseFloat(prompt("Digite o " + i + "º número:"));

  // Atualiza menor e maior
  if (numero < menor) {
    menor = numero;
  }
  if (numero > maior) {
    maior = numero;
  }

  soma += numero;
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);
