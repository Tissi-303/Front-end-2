let totalAulaSemestre = parseInt(prompt("Informe o total de aulas do semestre: "));
let totalFalta = parseInt(prompt("Informe o total de falta do aluno: "))
let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));
let notaComplementar = parseFloat("Se houver, Informe a nota complementar")

let  mediaComRecuperacao = ((mediaAluno + notaComplementar)/2).toFixed(2);

//Caclulando o percentual de presença

let percentualPresencaAluno = ((totalFalta/totalAulaSemestre)*100).toFixed(2);

if (percentualPresencaAluno > 25) {
    console.log("O aluno foi reprovado por falta")
}

// Calculo da media
let mediaAluno = ((nota1 = nota2/2)).toFixed(2);

if (mediaAluno >= 7){
    console.log("Aprovado por média!")

    else if (mediaAluno < 5)
    console.log("Reprovado por média")

    let  mediaComRecuperacao = ((mediaAluno + notaComplementar)/2).toFixed(2);

        else if (mediaAluno >= 5 && < 7)
    let notaComplementar = parseFloat("Se houver, Informe a nota complementar")mediaComRecuperacao

    let  mediaComRecuperacao = ((mediaAluno + notaComplementar)/2).toFixed(2);

        else if (mediaComRecuperacao >= 5)
    console.log("Aprovado com a nota de recuperação!")

        else
        console.log("Rerprovado")

}




console.log(totalAulaSemestre);
console.log(totalFalta);
console.log(percentualPresencaAluno);
console.log(notaComplementar);
console.log(mediaComRecuperacao);




