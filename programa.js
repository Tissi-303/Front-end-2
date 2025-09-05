
console.log("Inicio");

let TotalAulaSemestre = parseInt(prompt("informe o tolal de aulas do semestre: "));
let TotalFaltaAlunos = parseInt(prompt("informe o tolal de aulas que o aluno faltou: "));
let PrimeiraNota = parseFloat(prompt("informe sua primeira nota: "));
let SegundaNota = parseFloat(prompt("informe sua segunda nota: "));
let MediaNota
let ResultRec

let TotalFalta = ((TotalFaltaAlunos / TotalAulaSemestre) * 100).toFixed(2);

if(TotalFalta > 25){
    
    console.log("Você foi reprovado por frequencia.")

}
else{
    
    let MediaNota = ((PrimeiraNota+SegundaNota)/2).toFixed(2);
    console.log(MediaNota," Sua media final");
    console.log(TotalFalta,"% de falta");

    if(MediaNota >= 7){
       
        console.log("Você foi aprovado por nota e por frequencia");
    
    }
    else if(MediaNota < 7 && MediaNota >= 5){
        
        console.log("Você foi aprovado por frequencia mas está de recuperação");
        let ProvaRec = parseFloat(prompt("informe sua nota da recuperação: "));
        let ResultRec = ((ProvaRec+MediaNota)/2).toFixed(2);

        if(ResultRec >= 7){
           console.log("Você passou na recuperação com nota", ResultRec);
        }
        else{
            console.log("Você reprovou com nota", ResultRec);
        }
    }
    
    else{
        
        console.log("Você foi aprovado por frequencia mas está reprovado por nota");
    
    }

}
