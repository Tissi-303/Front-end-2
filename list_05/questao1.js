let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA <= populacaoB) {
  populacaoA += populacaoA * 0.03; // crescimento de 3% ao ano
  populacaoB += populacaoB * 0.015; // crescimento de 1.5% ao ano
  anos++;
}

console.log("Número de anos necessários: " + anos);
console.log("População A: " + Math.floor(populacaoA));
console.log("População B: " + Math.floor(populacaoB));
