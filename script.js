let pessoas = [];
const LIMITE = 15;

function adicionarPessoa() {
  let altura = parseFloat(document.getElementById("altura").value);
  let genero = document.getElementById("genero").value;
  let contador = document.getElementById("contador");

  if (isNaN(altura) || altura <= 0 || genero === "") {
    alert("Preencha altura e gênero corretamente!");
    return;
  }

  pessoas.push({ altura, genero });
  contador.innerText = `Cadastradas: ${pessoas.length} de ${LIMITE}`;
  
  document.getElementById("altura").value = "";
  document.getElementById("genero").value = "";

  if (pessoas.length === LIMITE) {
    calcularResultados();
  }
}

function calcularResultados() {
  if (pessoas.length === 0) {
    alert("Nenhuma pessoa cadastrada!");
    return;
  }

  let alturas = pessoas.map(p => p.altura);
  let maior = Math.max(...alturas);
  let menor = Math.min(...alturas);

  let homens = pessoas.filter(p => p.genero === "M");
  let mediaMasculino = homens.length > 0
    ? (homens.reduce((soma, p) => soma + p.altura, 0) / homens.length).toFixed(2)
    : "Sem homens cadastrados";

  let qtdMulheres = pessoas.filter(p => p.genero === "F").length;

  document.getElementById("resultado").innerHTML = `
    <h3>Resultados</h3>
    <p>Maior altura: ${maior.toFixed(2)} m</p>
    <p>Menor altura: ${menor.toFixed(2)} m</p>
    <p>Média de altura (Masculino): ${mediaMasculino}</p>
    <p>Número de mulheres: ${qtdMulheres}</p>
  `;
}

function resetar() {
  pessoas = [];
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("contador").innerText = "";
}
