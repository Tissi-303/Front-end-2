console.log("------- Crie um array com 5 nomes e exiba o terceiro nome no console-----------");

const nomes1 = ["Ana", "Bruno", "Carla", "Daniel", "Erika"];

console.log("o terceiro nome é: " + nomes1[2]);

console.log("-------- Adicione um nome ao final e um no início do array. Exiba o array atualizado no console.-----------");
let nomes2 = ["Ana", "Bruno", "Carla", "Daniel", "Erika"]; 

nomes2.push("Fábio"); 
nomes2.unshift("Zeca"); 

console.log(nomes2);

console.log("---------Remova o último nome e exiba o array atualizado.-----------");

let nomes3 = ["Ana", "Bruno", "Carla", "Daniel", "Erika"]; 
nomes3.pop(); 
console.log(nomes3);
console.log("--------------Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8]-----------");


const valores = [2, 4, 6, 8]; 

const valoresDobrados = valores.map(valor => valor * 2); 
console.log(valoresDobrados);
console.log("-------------Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9].-----------");

const numeros = [1, 3, 5, 7, 9]; 
const maioresQueCinco = numeros.filter(numero => numero > 5);

console.log(maioresQueCinco);

